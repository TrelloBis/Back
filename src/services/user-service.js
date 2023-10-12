const prismaClient = require("@prisma/client")

const prisma = new prismaClient.PrismaClient();

function createUser(username, password) {
    return prisma.user.create({
        data: {
            username: username,
            password: password
        }
    })
}

function getUserById(id) {
    return prisma.user.findUnique({
        where: {
            id: id
        }
    })
}

module.exports = {
    createUser,
    getUserById
}