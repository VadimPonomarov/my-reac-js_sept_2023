import axios from "axios";

const axiosService = axios.create({
    baseURL: "https://api.spacexdata.com/v3/launches/",
});

const axiosPostService = {
    getLaunches: () => axiosService()
        .then(({data}) => data)
        .catch((error) => {
            console.log(error);
        }),
};

export {axiosPostService};