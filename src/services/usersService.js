import {apiService} from "./apiService";
import {myHttpUrls} from "../constants/myHttpUrls";

export const usersService = {
    getAll: () => apiService(myHttpUrls.users.all)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),

    getById: (id) => apiService(myHttpUrls.users.getById(id))
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
    getPostsByUserId: (id) => apiService(myHttpUrls.users.getPostsByUserId(id))
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};