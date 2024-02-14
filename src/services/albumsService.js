import {apiService} from "./apiService";
import {coreService$} from "./coreService";
import {myHttpUrls} from "../constants/myHttpUrls";

export const albumsService = {
    getAll: () => apiService(myHttpUrls.albums.all)
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
    getById: (id) => apiService(myHttpUrls.albums.getById(id))
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
};