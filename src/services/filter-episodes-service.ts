import { IncomingMessage } from "node:http"
import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (podcastName: IncomingMessage) => {
  const queryString = podcastName.url?.split("?p=")[1] || ""

  const data = await repositoryPodcast(queryString)
  
  return data
}