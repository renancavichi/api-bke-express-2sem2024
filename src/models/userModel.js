import {PrismaClient} from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient()

const accountSchema = z.object({
    id: z.number({
            invalid_type_error: "O id deve ser um valor numérico",
            required_error: "O id é obrigatório"
        })
        .positive({message: "O id deve ser um número positivo maior que 0"}),
    public_id: z.string({
            invalid_type_error: "O public_id deve ser uma string",
            required_error: "O public_id é obrigatório"
        }),  
    name: z.string({
            invalid_type_error: "O nome deve ser uma string",
            required_error: "O nome é obrigatório"
        })
        .min(3, {message: "O nome deve ter ao menos 3 caracter"})
        .max(100, {message: "O nome deve ter no máximo 100 caracteres"}),
    email: z.string({
            invalid_type_error: "O email deve ser uma string",
            required_error: "O email é obrigatório"
        })
        .email({message: "Email inválido"})
        .max(200, {message: "O email deve ter no máximo 200 caracteres"}),    
    avatar: z.string({
            invalid_type_error: "O avatar deve ser uma string"
        })
        .url({message: "Url Inválida"})
        .min(11, {message: "O avatar deve ter no mínimo 11 caracteres"})
        .max(1000, {message: "O avatar deve ter no máximo 1000 caracteres"})
        .optional(),
    pass: z.string({
            invalid_type_error: "A senha deve ser uma string",
            required_error: "A senha é obrigatória"
        })
        .min(6, {message: "A senha deve ter ao menos 6 caracter"})
        .max(500, {message: "A senha deve ter no máximo 500 caracteres"})
})

export const userValidateToCreate = (account) => {
    const partialAccountSchema = accountSchema.partial({id: true, public_id: true})
    return partialAccountSchema.safeParse(account)
}

export const userValidateToLogin = (account) => {
    const partialAccountSchema = accountSchema.partial({id: true, public_id: true, avatar: true, name: true})
    return partialAccountSchema.safeParse(account)
}

export const getByPublicId = async (public_id) => {
    const user = await prisma.user.findUnique({
        where: {
            public_id
        }
    })
    return user
}

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    return user
}

export const getByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    return user
}

export const signUp = async (user) => {
    const result = await prisma.user.create({
        data: user
    })
    return result
}
