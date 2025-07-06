import * as http from "node:http"
import { app } from "./app"

const server = http.createServer(app)

const port = process.env.PORT

server.listen(port, () => console.log(`Server is runnig in port ${port}`))
