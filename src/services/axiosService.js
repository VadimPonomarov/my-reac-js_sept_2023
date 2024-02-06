import axios from "axios";
import {urls} from "../constants";

const axiosService = axios.create({
    baseURL: urls.launches.base
});

export {axiosService};