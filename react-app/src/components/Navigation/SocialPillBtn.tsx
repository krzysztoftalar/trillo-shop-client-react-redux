import React from 'react';
// Imports from src
import svg from '../../assets/img/sprite.svg';
import socialLinks from '../../app/options/socialLinks';

const SocialPillBtn = (): JSX.Element => {
    return (
        <div className="social-pill">
            <svg className="social-pill__icon">
                <use xlinkHref={`${svg}#icon-share`} />
            </svg>

            <div className="social-pill__links-box">
                {socialLinks.map((item) => (
                    <a
                        key={item.icon}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-pill__link"
                    >
                        <svg className="social-pill__icon">
                            <use xlinkHref={`${svg}#icon-${item.icon}`} />
                        </svg>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialPillBtn;
