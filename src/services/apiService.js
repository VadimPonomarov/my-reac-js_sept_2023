import axios from "axios";

import {urls} from ".";

const apiService = axios.create({
    baseURL: urls.items.baseUrl,
});

export {apiService};