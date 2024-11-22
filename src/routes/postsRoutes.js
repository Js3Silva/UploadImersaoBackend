// Importa os módulos necessários
import express from "express"; // Framework para criar e gerenciar o servidor
import multer from "multer"; // Biblioteca para manipulação de upload de arquivos
import cors from "cors";

const corsOptions = {
    origin: "http://localhost8000", 
    optionsSucessStatus: 200
};

import { listarPosts, postarNovaPublicacao, uploadImagem, atualizarNovoPost } from "../controllers/postController.js"; // Importa os controladores das funções

// Configuração de armazenamento para uploads (específico para Windows)
// Define onde os arquivos serão salvos e como os nomes serão configurados
const storage = multer.diskStorage({
    // Define o diretório de destino dos uploads
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Salva os arquivos na pasta 'uploads/'
    },
    // Define o nome do arquivo após o upload
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Mantém o nome original do arquivo
    }
});

// Configura o multer com o destino padrão e o armazenamento definido
const upload = multer({ dest: "./uploads", storage });

// Define as rotas da aplicação
const routes = (app) => {
    app.use(express.json()); // Habilita o middleware para processar requisições com corpo em formato JSON
    app.use(cors(corsOptions));

    // Rota para listar todos os posts
    app.get("/posts", listarPosts);

    // Rota para criar uma nova publicação
    app.post("/posts", postarNovaPublicacao);

    // Rota para upload de uma imagem com uma nova publicação
    // `upload.single("imagem")` processa o arquivo enviado com o campo "imagem"
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost);
}

// Exporta as rotas para serem utilizadas em outras partes da aplicação
export default routes;
