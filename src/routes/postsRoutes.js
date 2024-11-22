import express from "express";
import multer from "multer";
import { listarPosts, postarNovaPublicacao, uploadImagem } from "../controllers/postController.js";

//somente no caso do windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json()); // Habilita o middleware para lidar com requisições JSON
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovaPublicacao);
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;