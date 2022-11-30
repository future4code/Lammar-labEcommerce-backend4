import express, { Request, request, Response } from "express"
import cors from 'cors'
import dotenv from "dotenv"
import { connection } from "./data/connection"
import criarUsuario from "./endpoints/criarUsuario"
import listarUsuarios from "./endpoints/listaDeUsuarios"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// criando um novo usuário:
app.post("/users", criarUsuario)

// Listando os usuários:
app.get("/users", listarUsuarios)

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});