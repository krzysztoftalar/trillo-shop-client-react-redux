import axios, { AxiosResponse } from 'axios';
import { IProduct, IProductsEnvelope } from '../../store/product/types';
import { ICategory } from '../../store/category/types';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: Record<string, unknown>) => axios.post(url, body).then(responseBody),
    put: (url: string, body: Record<string, unknown>) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
};

const Products = {
    list: (params: URLSearchParams): Promise<IProductsEnvelope> =>
        axios.get('/products', { params }).then(responseBody),
    details: (id: number): Promise<IProduct> => requests.get(`/products/${id}`),
};

const Categories = {
    list: (): Promise<ICategory[]> => requests.get('/categories'),
};

export default {
    Products,
    Categories,
};
