import React, { MutableRefObject, useRef, useState } from 'react';
// Imports from src
import svg from '../../assets/img/sprite.svg';
import Slider from '../Slider/Slider';
import useDimensions from '../../app/customHooks/useDimensions';
import images from '../../app/data/images';

const ProductCard = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0);

    const targetRef = useRef() as MutableRefObject<HTMLImageElement>;
    const size = useDimensions(targetRef);

    const nextImage = () => {
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const prevImage = () => {
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    return (
        <div className="productCard">
            <img ref={targetRef} src={images[0].src} alt="" className="productCard__img" />

            <Slider dimensions={size} activeIndex={activeIndex} images={images} />

            <button onClick={() => prevImage()} className="slider__btn slider__btn--prev" type="button">
                <svg className="slider__btn-icon slider__btn-icon--prev">
                    <use xlinkHref={`${svg}#icon-chevron-down`} />
                </svg>
            </button>

            <button onClick={() => nextImage()} className="slider__btn slider__btn--next" type="button">
                <svg className="slider__btn-icon slider__btn-icon--next">
                    <use xlinkHref={`${svg}#icon-chevron-down`} />
                </svg>
            </button>

            <div className="productCard__summary">
                <h2 className="productCard__title">VIA Backpack</h2>

                <span className="productCard__price">$155</span>

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
