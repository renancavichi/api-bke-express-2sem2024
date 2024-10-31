import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config.js'

export const auth = (req, res, next) => {
    const authorization = req.headers.authorization

    if(!authorization)
       return res.status(403).json({error: "Não Autorizado, AccessToken não informado!"})
    
    const accessToken = authorization.split(' ')[1]

    if(!accessToken)
        return res.status(403).json({error: "Não Autorizado, Bearer com AccessToken não informado!"})
    
    try{
        const result = jwt.verify(accessToken, SECRET_KEY)

        //continuar
        console.log(result)
    } catch(error)
    {
        if(error?.name === 'TokenExpiredError')
            return res.status(403).json({error: "Não Autorizado, AccessToken Expirado!"})

        if(error?.name === 'JsonWebTokenError')
            return res.status(403).json({error: "Não Autorizado, AccessToken Inválido!"})
    }

    next()
}