import { IPhoto } from './photo';
import { IStock } from './stock';
import { ITag } from './tag';
import { IReview } from './review';

export interface IProduct {
    id: number;
    name: string;
    description?: string;
    price: number;
    category: string;
    bgColor: string;
    rating: number;
    photos: IPhoto[];
    tags: ITag[];
    stocks: IStock[];
    reviews: IReview[];
}

export interface IProductsEnvelope {
    products: IProduct[];
    productsCount: number;
}
