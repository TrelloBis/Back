import * as taskService from '../services/task-service';
import express, { Request, Response} from 'express';

const createTask = async (req: Request, res: Response) => {
    let returnedResponse;
    let requestBody = req.body;

    try {
        returnedResponse = await taskService.createTask(requestBody);
        res.status(201).send(returnedResponse);
    }
    catch (error: {message: string} | any) {
        res.status(400).send(error.message);
    }
}

const getTaskByUserId = async (req: Request, res: Response) => {
    let returnedResponse;
    const id = req.body.userId;

    try {
        returnedResponse = await taskService.getTaskByUserId(id);
        res.status(200).send(returnedResponse);
    }
    catch (error: {message: string} | any) {
        res.status(400).send(error.message);
    }
}

const getTaskById = async (req: Request, res: Response) => {
    let returnedResponse;
    let id = req.params.id;

    try {
        returnedResponse = await taskService.getTaskById(id);
        res.status(200).send(returnedResponse);
    }
    catch (error: {message: string} | any) {
        res.status(400).send(error.message);
    }
}

const updateTask = async (req: Request, res: Response) => {
    let returnedResponse;
    let requestBody = req.body;
    let id = req.params.id;

    try {
        returnedResponse = await taskService.updateTask(id, requestBody);
        res.status(200).send(returnedResponse);
    }
    catch (error: {message: string} | any) {
        res.status(400).send(error.message);
    }
}

const deleteTask = async (req: Request, res: Response) => {
    let returnedResponse;
    let id = req.params.id;

    try {
        returnedResponse = await taskService.deleteTask(id);
        res.status(200).send(returnedResponse);
    }
    catch (error: {message: string} | any) {
        res.status(400).send(error.message);
    }
}

export {
    createTask,
    getTaskById,
    getTaskByUserId,
    updateTask,
    deleteTask
}