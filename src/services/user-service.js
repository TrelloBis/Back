const prismaClient = require("@prisma/client")

const prisma = new prismaClient.PrismaClient();

function createUser(username, password) {
    const  existingUser = prisma.user.findUnique({
        where: {
            username: username
        }
    })

    if (existingUser) {
        throw new Error("User already exists")
    }

    return prisma.user.create({
        data: {
            username: username,
            password: password
        }
    })
}

function getUserByUsername(username) {
    return prisma.user.findUnique({
        where: {
            username: username
        }
    })
}

export default {
    createUser,
    getUserByUsername
}