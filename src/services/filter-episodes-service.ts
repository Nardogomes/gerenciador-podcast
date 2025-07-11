import { IncomingMessage } from "node:http"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName: IncomingMessage):Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }
  
  const queryString = podcastName.url?.split("?p=")[1] || ""

  const data = await repositoryPodcast(queryString)

  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent

  responseFormat.body = data
  
  return responseFormat
}
