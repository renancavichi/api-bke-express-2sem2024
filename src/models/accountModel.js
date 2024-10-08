import {PrismaClient} from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient()

const accountSchema = z.object({
    id: z.number({
            invalid_type_error: "O id deve ser um valor numérico",
            required_error: "O id é obrigatório"
        })
        .positive({message: "O id deve ser um número positivo maior que 0"}),
    service: z.string({
            invalid_type_error: "O nome do serviço deve ser uma string",
            required_error: "O nome do serviço é obrigatório"
        })
        .min(1, {message: "O nome do serviço deve ter ao menos 1 caracter"})
        .max(255, {message: "O nome do serviço deve ter no máximo 255 caracteres"}),    
    username: z.string({
            invalid_type_error: "O username deve ser uma string",
            required_error: "O username é obrigatório"
        })
        .min(3, {message: "O username deve ter ao menos 3 caracter"})
        .max(255, {message: "O username deve ter no máximo 255 caracteres"}),   
    logo_image: z.string({
            invalid_type_error: "A url da imagem deve ser uma string"
        })
        .url({message: "Url Inválida"})
        .min(11, {message: "A url deve ter no mínimo 11 caracteres"})
        .max(1000, {message: "A url deve ter no máximo 1000 caracteres"})
        .optional(),
    pass: z.string({
            invalid_type_error: "A senha deve ser uma string",
            required_error: "A senha é obrigatória"
        })
        .min(6, {message: "A senha deve ter ao menos 6 caracter"})
        .max(500, {message: "A senha deve ter no máximo 500 caracteres"}),      
    user_id: z.number({
            invalid_type_error: "O user_id deve ser um valor numérico",
            required_error: "O user_id é obrigatório"
        })
        .positive({message: "O user_id deve ser um número positivo maior que 0"})
})

export const accountValidateToCreate = (account) => {
    const partialAccountSchema = accountSchema.partial({id: true})
    return partialAccountSchema.safeParse(account)
}

export const accountValidateToUpdate = (account) => {
    return accountSchema.safeParse(account)
}

export const accountValidateId = (id) => {
    const partialAccountSchema = accountSchema.partial({
        service: true,
        username: true,
        pass: true,
        user_id: true
    })
    return partialAccountSchema.safeParse({id})
}

export const listAccounts = async () => {
    const accounts = await prisma.account.findMany({
        orderBy: {
            id: 'desc'
        }
    })
    return accounts
}

export const getByIdAccount = async (id) => {
    const account = await prisma.account.findUnique({
        where: {
            id
        }
    })
    return account
}

export const create = async (account) => {
    const result = await prisma.account.create({
        data: account
    })
    return result
}

export const deleteAccount = async (id) => {
    const account = await prisma.account.delete({
        where: {
            id: id
        }
    })
    return account
}

export const update = async (account) => {
    const result = await prisma.account.update({
        data: account,
        where:{
           id: account.id 
        }
    })
    return result
}