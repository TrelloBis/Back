const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

/// Routes ///
app.use("/api/users", require("./routes/user-routes"))
app.use("/api/tasks", require("./routes/task-routes"))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
