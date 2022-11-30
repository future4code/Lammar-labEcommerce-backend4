import express, { Request, request, Response } from "express"
import cors from 'cors'
import dotenv from "dotenv"
import { connection } from "./data/connection"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// criando um novo usuário:
app.post("/users", async (req:Request, res:Response)=>{
    try{
        const {name, email, password} = req.body
    
        if(!name && !email && !password){
            return res.status(422).send("Insira todos os parâmetros necessários: nome, email e password.")
        }
    
        await connection.insert(
            [{
                id:Math.random(),
                name: name,
                email: email,
                password: password
            }]
        ).into("Labecommerce_users")        
    
        res.status(201).send(`Sua conta foi criada com sucesso!`)
        console.log("Cliente cadastrado com sucesso!")

    }catch(error:any){
        console.log(error)
    }
})

// Listando os usuários:
app.get("/users", async (req:Request, res:Response):Promise<void>=>{
    try{
       let result = await connection.raw(
            `SELECT * FROM Labecommerce_users`
        )
        res.status(200).send(result[0])
    }catch(error:any){
        console.log(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});