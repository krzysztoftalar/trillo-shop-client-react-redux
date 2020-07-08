import { ITEMS_PER_PAGE } from "../../store/product/types";

export const setParams = (pageIndex: number, predicate: Map<string, string>) => {
    const params = new URLSearchParams()

    params.append('itemsPerPage', String(ITEMS_PER_PAGE))
    params.append("skip", `${pageIndex ? pageIndex * ITEMS_PER_PAGE : 0}`)

    predicate.forEach(((value, key) => params.append(key, value)))
    return params
}