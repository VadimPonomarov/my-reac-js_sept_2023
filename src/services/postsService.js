import {apiService} from "./apiService";
import {coreService$} from "./coreService";
import {myHttpUrls} from "../constants/myHttpUrls";

export const postsService = {
    getAll: () => apiService(myHttpUrls.posts.all)
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
    getCommentsByPostId: (postId) => apiService(myHttpUrls.posts.getCommentsByPostId(postId))
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
};