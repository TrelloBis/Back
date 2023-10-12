const prismaClient = require("@prisma/client")

const prisma = new prismaClient.PrismaClient();

function createTask(title, description, priorite, etat, userId) {
    return prisma.task.create({
        data: {
            title: title,
            description: description,
            priorite: priorite,
            etat: etat,
            user: {
                connect: {
                    id: userId
                }
            }
        }
    })
}

function getTasksByUserId(userId) {
    return prisma.task.findMany({
        where: {
            userId: userId
        }
    })
}

function updateTask(id, title, description, priorite, etat) {
    return prisma.task.update({
        where: {
            id: id
        },
        data: {
            title: title,
            description: description,
            priorite: priorite,
            etat: etat
        }
    })
}

function deleteTask(id) {
    return prisma.task.delete({
        where: {
            id: id
        }
    })
}

export default {
    createTask,
    getTasksByUserId,
    updateTask,
    deleteTask
}