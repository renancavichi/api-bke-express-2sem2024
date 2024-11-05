import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const createSession = async (user_id, token) => {
    const result = await prisma.session.create({
        data: {
            user_id: user_id,
            token: token 
        }
    })
    return result
}

export const deleteByToken = async (token) => {
    const result = await prisma.session.delete({
        where: {
            token
        }
    })
    return result
}

export const getSessionByToken = async (token) => {
    const result = await prisma.session.findUnique({
        where: {
            token
        }
    })
    return result
}

export const updateToken = async (oldToken, newToken) => {
    const result = await prisma.session.update({
        data: {
            token: newToken
        },
        where: {
            token: oldToken
        }
    })
    return result
}

// export const getByEmail = async (email) => {
//     const user = await prisma.user.findUnique({
//         where: {
//             email
//         }
//     })
//     return user
// }


