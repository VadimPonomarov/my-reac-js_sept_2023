import {myHttpUrls} from "common/constants/myHttpUrls";

import {apiService} from ".";

const characterService = {
    getByds: (ids: number[] | number) => apiService.get(myHttpUrls.characters.byIds(ids))
}