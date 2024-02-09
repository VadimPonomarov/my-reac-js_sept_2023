import axios from "axios";

import {myHttpUrls} from "./constants/myHttpUrls";


const apiService = axios.create({
    baseURL: myHttpUrls.urls.baseUrl,
});

export {apiService};