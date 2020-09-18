import React from 'react';
// Imports from src
import CarouselContent from '../Home/CarouselContent';
import SquareButton from '../Buttons/SquareButton';

interface IProps {
    activeImage: {
        src: string;
        header: string;
        infoText: string;
        infoNum: string;
        buttonText: string;
    };
    prevImage: string;
    handleNextImage: () => void;
    setAnimating: (animating: boolean) => void;
    animating: boolean;
}

const CarouselItem: React.FC<IProps> = ({
    activeImage,
    prevImage,
    handleNextImage,
    setAnimating,
    animating,
}: IProps): JSX.Element => {
    const fadeIn = animating ? 'fadeIn' : '';
    const fadeOut = animating ? 'fadeOut' : '';

    return (
        <>
            <img
                src={prevImage}
                className={`carousel__img ${fadeOut}`}
                alt="Collection"
            />

            <img
                src={activeImage.src}
                className={`carousel__img ${fadeIn}`}
                onAnimationEnd={() => setAnimating(false)}
                alt="Collection"
            />

            <CarouselContent props={activeImage} animating={animating} />

            <SquareButton handleClick={handleNextImage} />
        </>
    );
};

export default CarouselItem;
