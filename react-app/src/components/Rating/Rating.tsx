import React from 'react';
// Imports from src
import svg from '../../assets/img/sprite.svg';

interface IProps {
    rating: string;
}

const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Rating: React.FC<IProps> = ({ rating }: IProps): JSX.Element => {
    return (
        <>
            <div className="rating">
                <span className="rating__max">
                    {stars.map((star) => (
                        <svg className="rating__star" key={star.id}>
                            <use xlinkHref={`${svg}#icon-star-full`} />
                        </svg>
                    ))}
                </span>

                <span className="rating__users" style={{ width: `${rating}%` }}>
                    {stars.map((star) => (
                        <svg className="rating__star" key={star.id}>
                            <use xlinkHref={`${svg}#icon-star-full`} />
                        </svg>
                    ))}
                </span>
            </div>

            <button className="product__review-btn" type="button">
                2 Customer Reviews
            </button>
        </>
    );
};

export default Rating;
