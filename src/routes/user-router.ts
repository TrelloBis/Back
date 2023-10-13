import express from "express";
import * as userController from "../controllers/user-controller";

const UserRouter = express.Router();

UserRouter
    .post("/", userController.createUser)
    .get("/:username", userController.getUserByUsername)
    .get("/:id", userController.getUserById)

export default UserRouter