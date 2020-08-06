import React, { useState } from 'react';
// Imports from src
import CarouselItem from './CarouselItem';

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

    const nextImage = () => {
        if (animating) return;

        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

        setActiveIndex(nextIndex);
        setAnimating(true);
    };

    return (
        <div className="carousel">
            <CarouselItem
                props={images[activeIndex]}
                nextImage={nextImage}
                setAnimating={setAnimating}
                animating={animating}
            />
        </div>
    );
};

export default Carousel;
