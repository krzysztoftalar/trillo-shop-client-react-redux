import React from 'react';
import svg from '../../assets/img/sprite.svg';

interface IProps {
    props: {
        icon: string;
        number: number;
    };
}

const NavIconBox: React.FC<IProps> = ({ props: { icon, number } }: IProps): JSX.Element => {
    return (
        <a href="/" className="nav-icon__box">
            <svg className="nav-icon__icon">
                <use xlinkHref={`${svg}#icon-${icon}`} />
            </svg>

            <span className="nav-icon__notification">{number}</span>
        </a>
    );
};

export default NavIconBox;
