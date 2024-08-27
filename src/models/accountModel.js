import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const listAccounts = async () => {
    const accounts = await prisma.account.findMany()
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

