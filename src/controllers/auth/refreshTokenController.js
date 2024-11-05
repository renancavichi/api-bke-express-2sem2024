import { getSessionByToken, updateToken } from "../../models/sessionModel.js"
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from "../../config.js"
import { getById } from "../../models/userModel.js"

const refreshToken = async (req, res, next) => {
    try{
        const authorization = req.headers.authorization

        if(!authorization)
        return res.status(403).json({error: "Não Autorizado, AccessToken não informado!"})
    
        const accessToken = authorization.split(' ')[1]

        const session = await getSessionByToken(accessToken)

        console.log(session)

        if(!session)
            return res.status(403).json({error: "Não Autorizado, AccessToken não encontrado!"})

        const userLogged = await getById(session.user_id)

        // gero o token de acesso
        const newToken = jwt.sign({public_id: userLogged.public_id, name: userLogged.name }, SECRET_KEY, { expiresIn: 60 * 5 })

        //update do novo token
        const result = await updateToken(accessToken, newToken)

        if(!result)
            return res.status(403).json({error: "Erro ao atualizar novo Token!"})

        //devolver o token de acesso para o usuário
        return res.json({
            success: "Token atualizado com sucesso!",
            accessToken: newToken,
            user: {
                public_id: userLogged.public_id,
                name: userLogged.name,
                avatar: userLogged.avatar,
                email: userLogged.email
            }
        })
        
    } catch(error) {
        next(error)
    }
}

export default refreshToken