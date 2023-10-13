import express from "express";
import * as taskController from "../controllers/task-controller";

const TaskRouter = express.Router();

TaskRouter
    .post("/", taskController.createTask)
    .get("/:id", taskController.getTaskById)
    .get("/:userId", taskController.getTaskByUserId)
    .put("/:username", taskController.updateTask)
    .delete("/:username", taskController.deleteTask)

export default TaskRouter