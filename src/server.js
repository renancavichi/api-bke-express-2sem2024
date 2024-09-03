import express from 'express'
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import { ENVIRONMENT, PORT, HOST } from './config.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {res.json({message: "Bem-vindo a API!"})})

app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.listen(PORT, () => {
    console.log(`Servidor Rodando no ambiente ${ENVIRONMENT} em ${ ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT }`)
})