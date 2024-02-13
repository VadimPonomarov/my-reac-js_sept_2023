import {apiService} from "./apiService";
import {myHttpUrls} from "../constants/myHttpUrls";

export const coreService = {
    getAll: (name) => apiService(myHttpUrls[`${name}`].all)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
    getById: (name, id) => apiService(myHttpUrls[`${name}`].getById(id))
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};
