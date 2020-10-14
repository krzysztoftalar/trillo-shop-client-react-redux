import React, { useState } from 'react';
// Imports from src
import footerLinks from '../../app/options/footerLinks';
import NavigationIcons from './NavigationIcons';
import Dropdown from '../Dropdown/Dropdown';
import currencies from '../../app/options/currencies';

const Footer = (): JSX.Element => {
    const [current, setCurrent] = useState<{ id: number; value: string }>(
        currencies[0]
    );

    return (
        <footer className="footer">
            <ul className="footer__nav">
                {footerLinks.map((item) => (
                    <li className="footer__item" key={item.text}>
                        <a href="/" className="footer__link">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="footer__contact-box u-display-none-s">
                <p className="footer__text">trillo@store.com</p>
                <p className="footer__text">+1 248-785-8545</p>
            </div>

            <hr className="footer__divider" />

            <div className="footer__main-box">
                <div className="footer__left-items">
                    <div className="footer__social-box">
                        <NavigationIcons />
                    </div>

                    <p className="footer__text">
                        &copy; 2020 Trillo All rights reserved
                    </p>
                </div>

                <div className="footer__right-items">
                    <div className="footer__dropdown">
                        <p>Currency</p>
                        <Dropdown
                            options={currencies}
                            current={current}
                            setCurrent={setCurrent}
                        />
                    </div>

                    <img
                        src="./payments.png"
                        alt="Payments options"
                        className="footer__img"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
