import React, { useState } from 'react';
// Imports from src
import usePrevState from '../../app/hooks/usePrevState';
import { IPhoto } from '../../models/photo';

interface IProps {
    images: IPhoto[];
}

const Gallery: React.FC<IProps> = ({ images }: IProps): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const prevIndex = usePrevState(activeIndex);

    const handleImage = (id: string) => {
        const newIndex = images.findIndex((img) => img.id === id);

        if (newIndex === activeIndex) return;

        setActiveIndex(newIndex);
        setAnimating(true);
    };

    const fadeIn = animating ? 'gallery__img--fadeIn' : '';
    const fadeOut = animating ? 'gallery__img--fadeOut' : '';

    return (
        <div className="gallery">
            {/* Get width of gallery box */}
            <img
                src={images[0].url}
                className="gallery__wrapper"
                alt="Product"
            />

            {/* Prev image */}
            <img
                src={images[prevIndex].url}
                className={`gallery__img ${fadeOut}`}
                alt="Product"
            />

            {/* Active image */}
            <img
                src={images[activeIndex].url}
                className={`gallery__img ${fadeIn}`}
                onAnimationEnd={() => setAnimating(false)}
                alt="Product"
            />

            {/* Selection buttons */}
            <div className="gallery__btn-box">
                {/* Media query (min-width: 600px) */}
                <div className="gallery__btn-num">
                    {images.map((img, index) => (
                        <button
                            onClick={() => handleImage(img.id)}
                            className={`gallery__btn ${
                                index === activeIndex
                                    ? 'gallery__btn--active'
                                    : ''
                            }`}
                            key={img.id}
                            type="button"
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Media query (max-width: 600px) */}
                <div className="gallery__btn-circle">
                    {images.map((img, index) => (
                        <button
                            onClick={() => handleImage(img.id)}
                            className={`circle-btn ${
                                index === activeIndex
                                    ? 'circle-btn--active'
                                    : ''
                            }`}
                            key={img.id}
                            type="button"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
