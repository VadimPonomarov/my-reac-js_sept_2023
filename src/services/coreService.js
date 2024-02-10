import {apiService} from "./apiService";
import {myHttpUrls} from "./constants/myHttpUrls";

export const coreService = {
    getAll: () => apiService(myHttpUrls.urls.all)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
    createOne: (data) => apiService.post(myHttpUrls.urls.all, data)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};
