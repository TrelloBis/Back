import express from "express";
import * as taskController from "../controllers/task-controller";

const TaskRouter = express.Router();

TaskRouter
    .post("/create", taskController.createTask)
    .get("/:id", taskController.getTaskById)
    .post("/", taskController.getTaskByUserId)
    .put("/:id", taskController.updateTask)
    .delete("/:id", taskController.deleteTask)

export default TaskRouter