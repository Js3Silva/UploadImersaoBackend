// Importa funções para interação com o modelo de dados (postModel) e o módulo de sistema de arquivos (fs)
import { getTodosPosts, criarPubli } from "../models/postModel.js";
import fs from "fs";

// Função para listar todos os posts
export async function listarPosts(req, res) {
    // Busca todos os posts através do modelo e armazena o resultado
    const resultado = await getTodosPosts(); 
    // Retorna os posts em formato JSON com status 200 (sucesso)
    res.status(200).json(resultado); 
}

// Função para criar uma nova publicação
export async function postarNovaPublicacao(req, res) {
    const novaPubli = req.body; // Obtém os dados da nova publicação enviados no corpo da requisição
    try {
        // Chama a função para criar uma nova publicação no banco de dados
        const publiCriada = await criarPubli(novaPubli); 
        // Retorna os dados da publicação criada em formato JSON com status 200 (sucesso)
        res.status(200).json(publiCriada); 
    } catch (erro) {
        // Registra o erro no console e retorna uma mensagem de erro com status 500 (erro do servidor)
        console.log(erro.message); 
        res.status(500).json({ "Erro": "Falha na requisição" }); 
    }
}

// Função para fazer upload de uma imagem e criar uma nova publicação
export async function uploadImagem(req, res) {
    const novaPubli = req.body; // Obtém os dados da nova publicação enviados no corpo da requisição
    try {
        // Cria uma nova publicação no banco de dados
        const publiCriada = await criarPubli(novaPubli); 
        
        // Define o novo caminho para o arquivo da imagem usando o ID da publicação criada
        const arquivoAtualizado = `uploads/${publiCriada.insertedId}.png`; 
        
        // Move o arquivo enviado para o novo local com o nome atualizado
        fs.renameSync(req.file.path, arquivoAtualizado); 
        
        // Retorna os dados da publicação criada em formato JSON com status 200 (sucesso)
        res.status(200).json(publiCriada); 
    } catch (erro) {
        // Registra o erro no console e retorna uma mensagem de erro com status 500 (erro do servidor)
        console.log(erro.message); 
        res.status(500).json({ "Erro": "Falha na requisição" }); 
    }
}
