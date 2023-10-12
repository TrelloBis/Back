import app from "./app"
import http from "http"

const port = '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
