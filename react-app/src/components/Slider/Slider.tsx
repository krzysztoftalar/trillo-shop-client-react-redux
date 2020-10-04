import React from 'react';
// Imports from src
import { IPhoto } from '../../store/photo/types';

interface IProps {
    images: IPhoto[];
    dimensions: { width: number; height: number };
    activeIndex: number;
}

const Slider: React.FC<IProps> = ({
    images,
    dimensions: { width, height },
    activeIndex,
}: IProps): JSX.Element => {
    return (
        <div className="slider">
            <div
                className="slider__wrapper"
                style={{
                    transform: `translateX(-${
                        activeIndex * (100 / images.length)
                    }%)`,
                }}
            >
                {images.map((img) => (
                    <img
                        key={img.id}
                        src={img.url}
                        className="slider__img"
                        style={{ width, height }}
                        alt={`Product ${img.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
