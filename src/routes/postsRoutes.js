import express from "express";
import { listarPosts } from "../controllers/postController.js";

const routes = (app) => {
    app.use(express.json()); // Habilita o middleware para lidar com requisições JSON
    app.get("/posts", listarPosts);
}

export default routes;