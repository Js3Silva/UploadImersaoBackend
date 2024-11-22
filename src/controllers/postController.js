import {getTodosPosts, criarPubli} from "../models/postModel.js";

export async function listarPosts(req, res) {
    const resultado = await getTodosPosts(); // Chama a função para buscar todos os posts
    res.status(200).json(resultado); // Retorna os posts em formato JSON com status 200 (sucesso)
}

export async function postarNovaPublicacao(req, res) {
    const novaPubli = req.body;
    try{
        const publiCriada = await criarPubli(novaPubli);
        res.status(200).json(publiCriada);
    } catch(erro) {
        console.log(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novaPubli = req.body;
    try{
        const publiCriada = await criarPubli(novaPubli);
        res.status(200).json(publiCriada);
    } catch(erro) {
        console.log(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}