import * as userService from '../services/user-service';
import express, { Request, Response} from 'express';

const createUser = async (req: Request, res: Response) => {
    let returnedResponse;
    let requestBody = req.body;

    try {
        returnedResponse = await userService.createUser(requestBody);
        res.status(201).send(returnedResponse);
    }
    catch (error: {message: string} | any) {
        res.status(400).send(error.message);
    }
}

const getUserById = async (req: Request, res: Response) => {
    let returnedResponse;
    let id = req.params.id;

    try {
        returnedResponse = await userService.getUserById(id);
        res.status(200).send(returnedResponse);
    }
    catch (error: {message: string} | any) {
        res.status(400).send(error.message);
    }
}

const getUserByUsername = async (req: Request, res: Response) => {
    let returnedResponse;
    let username = req.body.username;

    try {
        returnedResponse = await userService.getUserByUsername(username);
        res.status(200).send(returnedResponse);
    }
    catch (error: {message: string} | any) {
        res.status(400).send(error.message);
    }
}

export {
    createUser,
    getUserById,
    getUserByUsername
}