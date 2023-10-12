import express from "express"
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())

/// Routes ///
app.use("/users", require("./routes/user-routes"))
app.use("/tasks", require("./routes/task-routes"))

export default app