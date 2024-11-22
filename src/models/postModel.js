import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão obtida da variável de ambiente

export async function getTodosPosts(){
    const db = conexao.db("imersao_instabytes"); // Seleciona o banco de dados
    const colecao = db.collection("posts"); // Seleciona a coleção de posts
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array
  }

  export async function criarPubli(novaPubli) {
    const db = conexao.db("imersao_instabytes"); // Seleciona o banco de dados
    const colecao = db.collection("posts"); // Seleciona a coleção de posts
    return colecao.insertOne(novaPubli);
  }

  export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao_instabytes"); // Seleciona o banco de dados
    const colecao = db.collection("posts"); // Seleciona a coleção de posts
    const objectID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objectID)}, {$set:novoPost});
  }