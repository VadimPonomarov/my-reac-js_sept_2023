import axios from "axios";

const axiosService = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts/",
});

const axiosPostService = {
    getPosts: () => axiosService()
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
    getPost: (id) => axiosService(id)
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};

export {axiosPostService};