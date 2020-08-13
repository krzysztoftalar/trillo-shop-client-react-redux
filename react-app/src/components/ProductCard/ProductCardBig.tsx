import React from 'react';

interface IProps {
    product: {
        id: number;
        img: string;
        title: string;
        price: string;
        category: string;
    };
}

const ProductCardBig: React.FC<IProps> = ({ product: { img, title, price, category } }: IProps): JSX.Element => {
    return (
        <div className="productCardBig">
            <img className="productCardBig__img" src={img} alt="Product" />

            <div className="productCardBig__box">
                <button className="productCardBig__btn" type="button">
                    <div className="dash">
                        <span className="dash__line" />
                        <h4 className="heading-quaternary">{category}</h4>
                    </div>
                </button>

                <h3 className="productCardBig__title">{title}</h3>

                <span className="productCardBig__price">{price}</span>

                <button className="btn-underline btn-underline--white" type="button">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default ProductCardBig;
