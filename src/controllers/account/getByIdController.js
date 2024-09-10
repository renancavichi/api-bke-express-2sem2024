import { getByIdAccount } from "../../models/accountModel.js"

const getById = async (req, res, next) => {
    //const id = req.params.id
    try{ 
        const {id} = req.params
        const account = await getByIdAccount(+id)

        if(!account)
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })

        return res.json({
            success: "Conta encontrada com sucesso!",
            account
        })
    } catch(error) {
        next(error)
    }
}

export default getById