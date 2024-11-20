import {getTodosPosts} from "../models/postModel.js";

export async function listarPosts(req, res) {
    const resultado = await getTodosPosts(); // Chama a função para buscar todos os posts
    res.status(200).json(posts); // Retorna os posts em formato JSON com status 200 (sucesso)
}
