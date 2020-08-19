import React from 'react';
// Imports from src
import svg from '../../assets/img/sprite.svg';

const ButtonIndicator = (): JSX.Element => {
    return (
        <svg className="btn-indicator">
            <use xlinkHref={`${svg}#icon-spinner`} />
        </svg>
    );
};

export default ButtonIndicator;
