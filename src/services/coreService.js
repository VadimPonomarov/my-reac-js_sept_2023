import {apiService} from "./apiService";

const coreService = {
    getAll: () => apiService()
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};

export {coreService};