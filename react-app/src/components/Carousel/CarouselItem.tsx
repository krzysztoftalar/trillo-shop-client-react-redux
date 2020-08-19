import React from 'react';
// Imports from src
import CarouselContent from '../Home/CarouselContent';
import SquareButton from '../Buttons/SquareButton';

interface IProps {
    props: {
        src: string;
        header: string;
        infoText: string;
        infoNum: string;
        buttonText: string;
    };
    content?: JSX.Element;
    handleNextImage: () => void;
    setAnimating: (animating: boolean) => void;
    animating: boolean;
}

const CarouselItem: React.FC<IProps> = ({
    props,
    handleNextImage,
    setAnimating,
    animating,
}: IProps): JSX.Element => {
    const fadeIn = animating ? 'fadeIn' : '';
    const { src } = props;

    return (
        <>
            <img
                src={src}
                className={`carousel__img ${fadeIn}`}
                onAnimationEnd={() => setAnimating(false)}
                alt="Collection"
            />

            <CarouselContent props={props} animating={animating} />

            <SquareButton handleClick={handleNextImage} />
        </>
    );
};

export default CarouselItem;
