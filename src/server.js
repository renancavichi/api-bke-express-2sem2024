import express from 'express'
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'

const app = express()

app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.listen(3000, () => {
    console.log('Servidor Rodando em http://localhost:3000')
})