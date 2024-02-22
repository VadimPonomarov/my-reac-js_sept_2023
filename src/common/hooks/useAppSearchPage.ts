import {useSearchParams, URLSearchParamsInit} from "react-router-dom"

const _default = {page: "1"}
const useAppSearchPage = (initial = _default) => {
    const [query, setQuery] = useSearchParams(initial)
    return [query, setQuery]
}
export {useAppSearchPage}