import {AxiosResponse} from "axios";

import {apiService} from "./apiService";
import {myHttpUrls} from "../constants/myHttpUrls";
import {IRickAndMortyEpisode} from "../types";

const episodeService = {
    getAll: (page = 1): Promise<IRickAndMortyEpisode> =>
        apiService.get(myHttpUrls.episodes, {params: {page}})
            .then(({data}) => data)
            .catch((error) => {
                console.log(error);
            }),
};
export {episodeService}