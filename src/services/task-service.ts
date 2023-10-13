import { PrismaClient } from "@prisma/client";
import { async } from "rxjs";

const prisma = new PrismaClient();

const createTask = async (requestBody: {title: string, description: string, userId: string, state: string, priority: string})=> {
    let createdTask;
    try {
        const taskToCreate = await prisma.task.create({
            data: {
                title: requestBody.title,
                description: requestBody.description,
                state: requestBody.state,
                priority: requestBody.priority,
                userId: requestBody.userId
            }
        })
        createdTask = taskToCreate
    } catch (error) {
        throw error
    }
    return createdTask
}

const getTaskByUserId = async (userId: string) => {
    let foundTask;
    try {
        const findTaskRequest = await prisma.task.findMany({
            where: {
                userId: userId
            }
        })
        foundTask = findTaskRequest
    } catch (error) {
        throw error
    }
    return foundTask
}

const getTaskById = async (id: string) => {
    let foundTask;
    try {
        const findTaskRequest = await prisma.task.findUnique({
            where: {
                id: id
            }
        })
        foundTask = findTaskRequest
    } catch (error) {
        throw error
    }
    return foundTask
}

const updateTask = async (id: string, requestBody: {title: string, description: string, state: string, priority: string}) => {
    let updatedTask;
    try {
        const taskToUpdate = await prisma.task.update({
            where: {
                id: id
            },
            data: {
                title: requestBody.title,
                description: requestBody.description,
                state: requestBody.state,
                priority: requestBody.priority
            }
        })
        updatedTask = taskToUpdate
    } catch (error) {
        throw error
    }
    return updatedTask
}

const deleteTask = async (id: string) => {
    let deletedTask;
    try {
        const taskToDelete = await prisma.task.delete({
            where: {
                id: id
            }
        })
        deletedTask = taskToDelete
    } catch (error) {
        throw error
    }
    return deletedTask
}

export {
    createTask,
    getTaskById,
    getTaskByUserId,
    updateTask,
    deleteTask
}