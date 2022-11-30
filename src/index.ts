import express, { Request, request, Response } from "express"
import cors from 'cors'
import dotenv from "dotenv"
import criarUsuario from "./endpoints/criarUsuario"
import listarUsuarios from "./endpoints/listaDeUsuarios"
import cadastrarProduto from "./endpoints/cadastrarProduto"
import listarProdutos from "./endpoints/listaDeProdutos"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// criando um novo usuário:
app.post("/users", criarUsuario)

// Listando os usuários:
app.get("/users", listarUsuarios)

// cadastrando produtos:
app.post("/products", cadastrarProduto)

//listando os produtos:
app.get("/products", listarProdutos)

// Registro de compra:
app.post("/purchases", )


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});