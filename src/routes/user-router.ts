import express from "express";
import * as userController from "../controllers/user-controller";

const UserRouter = express.Router();

UserRouter
    .post("/", userController.createUser)
    .get("/:username", userController.getUserByUsername)

export default UserRouter