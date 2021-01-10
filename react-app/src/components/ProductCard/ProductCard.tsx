import React, { MutableRefObject, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Imports from src
import svg from '../../assets/img/sprite.svg';
import Slider from '../Slider/Slider';
import useDimensions from '../../app/hooks/useDimensions';
import { IProduct } from '../../models/product';

interface IProps {
    product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }: IProps): JSX.Element => {
    const { name, price, photos } = product;

    const [activeIndex, setActiveIndex] = useState(0);

    const targetRef = useRef() as MutableRefObject<HTMLImageElement>;
    const size = useDimensions(targetRef);

    const nextImage = () => {
        const nextIndex =
            activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const prevImage = () => {
        const nextIndex =
            activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    return (
        <div className="productCard">
            <img
                ref={targetRef}
                src={photos[0].url}
                alt="Product"
                className="productCard__img"
            />

            <Link to={`products/${product.id}`}>
                <Slider
                    dimensions={size}
                    activeIndex={activeIndex}
                    images={photos}
                />
            </Link>

            <button
                onClick={() => prevImage()}
                className="slider__btn slider__btn--prev"
                type="button"
            >
                <svg className="slider__btn-icon slider__btn-icon--prev">
                    <use xlinkHref={`${svg}#icon-chevron-down`} />
                </svg>
            </button>

            <button
                onClick={() => nextImage()}
                className="slider__btn slider__btn--next"
                type="button"
            >
                <svg className="slider__btn-icon slider__btn-icon--next">
                    <use xlinkHref={`${svg}#icon-chevron-down`} />
                </svg>
            </button>

            <div className="productCard__summary">
                <h2 className="productCard__title">
                    <Link to={`products/${product.id}`}>{name}</Link>
                </h2>

                <span className="productCard__price">${price}</span>

                <div className="productCard__buttons">
                    <button className="productCard__btn" type="button">
                        Add to Cart
                    </button>

                    <div className="productCard__icon-box">
                        <svg className="productCard__icon u-display-none-l">
                            <use xlinkHref={`${svg}#icon-eye`} />
                        </svg>

                        <svg className="productCard__icon u-display-none-xs">
                            <use xlinkHref={`${svg}#icon-heart`} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
