import axios, { AxiosError, AxiosResponse } from 'axios';
// Imports from src
import { IProduct, IProductsEnvelope } from '../../models/product';
import { ICategory } from '../../store/category/types';
import { IUser, IUserFormValues } from '../../store/user/types';
import { ICartEnvelope } from '../../models/cart';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('jwt');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(undefined, (error) => {
    const { status, headers } = error.response;

    if (status === 401 && headers['www-authenticate']) {
        window.localStorage.removeItem('jwt');
    }

    throw error;
});

export const errorResponse = (error: AxiosError): string =>
    error.response?.data.errors;

export const responseBody = (response: AxiosResponse): Promise<any> =>
    response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
};

const User = {
    login: (user: IUserFormValues): Promise<IUser> =>
        requests.post('/users/login', user),
    currentUser: (): Promise<IUser> => requests.get('/users'),
};

const Products = {
    list: (params: URLSearchParams): Promise<IProductsEnvelope> =>
        axios.get('/products', { params }).then(responseBody),
    details: (id: number): Promise<IProduct> => requests.get(`/products/${id}`),
};

const Cart = {
    getCart: (): Promise<ICartEnvelope> =>
        axios.get('/carts', { withCredentials: true }).then(responseBody),
    addToCart: (stockId: number, quantity: number) =>
        axios.post(
            `carts/${stockId}/${quantity}`,
            {},
            { withCredentials: true }
        ),
    removeFromCart: (stockId: number, quantity: number) =>
        axios.put(
            `carts/${stockId}/${quantity}`,
            {},
            { withCredentials: true }
        ),
};

const Categories = {
    list: (): Promise<ICategory[]> => requests.get('/categories'),
};

export default {
    User,
    Products,
    Categories,
    Cart,
};
