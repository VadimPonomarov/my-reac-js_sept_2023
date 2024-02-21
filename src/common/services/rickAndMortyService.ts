import {apiService} from "./apiService";
import {myHttpUrls} from "../constants/myHttpUrls";
import {AxiosResType, IRickAndMortyEpisode} from "../types";

export const rickAndMortyService = {
    getAll: (page = 1): AxiosResType<IRickAndMortyEpisode[]> => apiService(myHttpUrls.episode.all(page))
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};