import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json(
        {
            message: "Olá Mundo Express!",
            success: "Sucesso ao executar API"
        }
    )
})

app.listen(3000, () => {
    console.log('Servidor Rodando em http://localhost:3000')
})