import React, { useState } from 'react';
// Imports from src
import CarouselItem from './CarouselItem';
import useInterval from '../../app/customHooks/useInterval';

interface IProps {
    images: {
        src: string;
        header: string;
        infoText: string;
        infoNum: string;
        buttonText: string;
    }[];
}

const Carousel: React.FC<IProps> = ({ images }: IProps): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(true);

    const setNextImage = () => {
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

        setActiveIndex(nextIndex);
        setAnimating(true);
    };

    const resetInterval = useInterval(() => setNextImage(), 10000);

    const handleNextImage = () => {
        if (animating) return;

        setNextImage();
        resetInterval();
    };

    return (
        <div className="carousel">
            <CarouselItem
                props={images[activeIndex]}
                handleNextImage={handleNextImage}
                setAnimating={setAnimating}
                animating={animating}
            />
        </div>
    );
};

export default Carousel;
