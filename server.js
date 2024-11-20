import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagemUrl: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato preguiçoso tomando sol",
        imagemUrl: "https://placecats.com/sleepy/400/200"
    },
    {
        id: 3,
        descricao: "Gato curioso explorando a caixa",
        imagemUrl: "https://placecats.com/cute/500/300"
    },
    {
        id: 4,
        descricao: "Uma foto teste",
        imagemUrl: "https://placecats.com/millie/300/150"
    },
];

const app = express();
app.use(express.json);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

async function getTodosPosts(){
    const db = conexao.db("imersao_instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

app.get("/posts", async (req, res) => {
    const resultado = await getTodosPosts();
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});