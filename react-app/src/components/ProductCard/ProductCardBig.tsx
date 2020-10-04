import React from 'react';
// Imports from src
import { IProduct } from '../../models/product';

interface IProps {
    product: IProduct;
}

const ProductCardBig: React.FC<IProps> = ({ product }: IProps): JSX.Element => {
    if (!product) return <h1>Loading...</h1>;

    const { name, price, category } = product;
    const img = product.photos.find((x) => x.isMain);

    return (
        <div className="productCardBig">
            <img className="productCardBig__img" src={img!.url} alt="Product" />

            <div className="productCardBig__box">
                <button className="productCardBig__btn" type="button">
                    <div className="dash">
                        <span className="dash__line" />
                        <h4 className="heading-quaternary">{category}</h4>
                    </div>
                </button>

                <h3 className="productCardBig__title">{name}</h3>

                <span className="productCardBig__price">{price}</span>

                <button
                    className="btn-underline btn-underline--white"
                    type="button"
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default ProductCardBig;
