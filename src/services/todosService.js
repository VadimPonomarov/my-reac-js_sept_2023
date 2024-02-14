import {apiService} from "./apiService";
import {coreService$} from "./coreService";
import {myHttpUrls} from "../constants/myHttpUrls";

export const todosService = {
    getAll: () => apiService(myHttpUrls.todos.all)
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
    getById: (id) => apiService(myHttpUrls.todos.getById(id))
        .then(({data}) => coreService$.next(data))
        .catch((error) => {
            console.log(error);
        }),
};