import React from 'react';
import svg from '../../assets/img/sprite.svg';

interface IProps {
    props: {
        icon: string;
        number: number;
    };
    handleClick?: () => void;
}

const NavIconBox: React.FC<IProps> = ({
    props: { icon, number },
    handleClick,
}: IProps): JSX.Element => {
    return (
        <button onClick={handleClick} className="nav-icon__box" type="button">
            <svg className="nav-icon__icon">
                <use xlinkHref={`${svg}#icon-${icon}`} />
            </svg>

            <span className="nav-icon__notification">{number}</span>
        </button>
    );
};

export default NavIconBox;
