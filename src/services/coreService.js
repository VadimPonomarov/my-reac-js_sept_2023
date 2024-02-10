import {apiService} from "./apiService";
import {myHttpUrls} from "../constants/myHttpUrls";

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
    updateOne: (data) => apiService.post(myHttpUrls.urls.byId + data.id, data)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
    updatePartialOne: (data) => apiService.patch(myHttpUrls.urls.byId + data.id, data)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
    deleteOne: (id) => apiService.delete(myHttpUrls.urls.byId + id)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};
