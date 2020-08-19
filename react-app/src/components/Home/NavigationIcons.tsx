import React from 'react';
// Imports from src
import socialLinks from '../../app/options/socialLinks';
import svg from '../../assets/img/sprite.svg';

const NavigationIcons = (): JSX.Element => {
    return (
        <>
            {socialLinks.map((item) => (
                <a
                    key={item.icon}
                    href={item.link}
                    className="sidebar__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg className="sidebar__icon">
                        <use xlinkHref={`${svg}#icon-${item.icon}`} />
                    </svg>
                </a>
            ))}
        </>
    );
};

export default NavigationIcons;
