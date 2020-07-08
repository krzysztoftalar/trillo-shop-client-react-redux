import axios, { AxiosResponse } from "axios";
import { IProduct, IProductsEnvelope } from "../../store/product/types";

axios.defaults.baseURL = "http://localhost:5002/api"

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Products = {
    list: (params: URLSearchParams): Promise<IProductsEnvelope> =>
        axios.get("/products", {params: params}).then(responseBody),
    details: (id: number): Promise<IProduct> => requests.get(`/products/${id}`)
}

export default {
    Products
}