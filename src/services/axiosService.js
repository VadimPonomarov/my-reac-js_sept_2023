import axios from "axios";
import {urls} from "../constants";

const axiosService = axios.create({
    baseURL: urls.posts.base,
});

const axiosPostService = {
    getPosts: () => axiosService(urls.posts.posts)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};

export {axiosPostService};