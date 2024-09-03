import { deleteAccount } from "../../models/accountModel.js"

const remove = async (req, res) => {
    const {id} = req.params
    const account = await deleteAccount(+id)

    if(!account)
        return res.status(404).json({
            error: `Conta com o id ${id}, não encontrado!`
        })

    return res.json({
        success: "Conta removida com sucesso!",
        account
    })
}

export default remove