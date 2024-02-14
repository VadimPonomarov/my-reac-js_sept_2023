import {apiService} from "./apiService";
import {coreService$} from "./coreService";
import {myHttpUrls} from "../constants/myHttpUrls";

export const commentsService = {
    getAll: () => apiService(myHttpUrls.comments.all)
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
    getById: (id) => apiService(myHttpUrls.comments.getById(id))
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
};