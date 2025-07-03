import { repositoryPodPodcast } from "../repositories/podcasts-repository"

export const serviceListEpisodes = async () => {
  const data = await repositoryPodPodcast()

  return data
}
