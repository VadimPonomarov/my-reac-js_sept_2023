import {urls} from "../constants";
import {axiosService} from "./axiosService";


const axiosLaunchService = {
    getLaunches: () => axiosService(urls.launches.launches)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};

export {axiosLaunchService};