import React from 'react';

interface IProps {
    props: {
        src: string;
        header: string;
        infoText: string;
        infoNum: string;
        buttonText: string;
    };
    animating: boolean;
}

const CarouselContent: React.FC<IProps> = ({
    props: { header, buttonText, infoNum, infoText },
    animating,
}: IProps): JSX.Element => {
    const fadeIn = animating ? 'fadeIn' : '';
    const moveInFromTop = animating ? 'moveInFromTop' : '';

    return (
        <>
            <div className="header-content__box">
                <div className="header-content__box--overflow">
                    <h2 className={`heading-primary ${moveInFromTop}`}>{header}</h2>
                </div>

                <div className="header-content__box--overflow">
                    <button className={`btn btn--white ${moveInFromTop}`} type="button">
                        {buttonText}
                    </button>
                </div>
            </div>

            <div className={`header-content__box-small ${fadeIn}`}>
                <span>{infoNum}</span>
                <span>&mdash;</span>
                <span>{infoText}</span>
            </div>
        </>
    );
};

export default CarouselContent;
