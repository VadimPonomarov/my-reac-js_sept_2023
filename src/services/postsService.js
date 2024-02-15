import {apiService} from "./apiService";
import {coreService$} from "./coreService";
import {myHttpUrls} from "../constants/myHttpUrls";

export const postsService = {
    getAll: () => apiService(myHttpUrls.posts.all)
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),

    getById: (id) => apiService(myHttpUrls.posts.getById(id))
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
    getCommentsByPost: (id) => apiService(myHttpUrls.posts.getCommentsByPostId(id))
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
};