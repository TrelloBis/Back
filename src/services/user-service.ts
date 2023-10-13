import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (requestBody: {username: string, password: string}) => {

let createdUser;

try {
    const userToCreate = await prisma.user.create({
        data: {
            username: requestBody.username,
            password: requestBody.password,
        },
    })
    createdUser = userToCreate
} catch (error) {
    throw error
}
    return createdUser
}

const getUserByUsername = async (username: string) => {
    let foundUser;
    try {
        const findUserRequest = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        foundUser = findUserRequest
    } catch (error) {
        throw error
    }
    return foundUser
}

const getUserById = async (id: string) => {
    let foundUser;
    try {
        const findUserRequest = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        foundUser = findUserRequest
    } catch (error) {
        throw error
    }
    return foundUser
}

export {
    createUser,
    getUserById,
    getUserByUsername
}