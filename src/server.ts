import * as http from "node:http"
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if(request.method === "GET" && request.url === "/episodes") {
      await getListEpisodes(request, response)
    }

    if(request.method === "GET" && request.url === "/filter-episode") {
      await getFilterEpisodes(request, response)
    }
  }
)

const port = process.env.PORT

server.listen(port, () => console.log(`Server is runnig in port ${port}`))
