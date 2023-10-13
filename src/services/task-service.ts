import { PrismaClient } from "@prisma/client";
import { TaskState, TaskPriority } from "../shared/task-enum";

const prisma = new PrismaClient();

// const createTask = async (requestBody: {title: string, description: string, userId: string, state: TaskState, priority: TaskPriority})=> {
//     let createdTask;
//     try {
//         const taskToCreate = await prisma.task.create({
//             data: {
//                 title: requestBody.title,
//                 description: requestBody.description,
//                 state: requestBody.state,
//                 priority: requestBody.priority,
//                 user: {
//                     connect: {
//                         id: requestBody.userId
//                     }
//                 }
//             }
//         })
//         createdTask = taskToCreate
//     } catch (error) {
//         throw error
//     }
//     return createdTask
// }

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

// const updateTask = async (id: string, requestBody: {title: string, description: string, state: TaskState, priority: TaskPriority}) => {
//     let updatedTask;
//     try {
//         const taskToUpdate = await prisma.task.update({
//             where: {
//                 id: id
//             },
//             data: {
//                 title: requestBody.title,
//                 description: requestBody.description,
//                 state: requestBody.state,
//                 priority: requestBody.priority
//             }
//         })
//         updatedTask = taskToUpdate
//     } catch (error) {
//         throw error
//     }
//     return updatedTask
// }

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
    //createTask,
    getTaskById,
    //updateTask,
    deleteTask
}