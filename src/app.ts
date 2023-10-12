import express, { Response, Request, NextFunction } from "express"

import UserRouter from "./routes/user-router"
import TaskRouter from "./routes/task-router"

import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/users", UserRouter)
app.use("/api/tasks", TaskRouter)

export default app