import { listAccounts } from "../../models/accountModel.js" 

const list = async (req, res, next) => {
    try{
        const accounts = await listAccounts()
        return res.json({
            message: "Contas listadas com sucesso!",
            accounts
        })
    } catch(error) {
        next(error)
    }
}

export default list