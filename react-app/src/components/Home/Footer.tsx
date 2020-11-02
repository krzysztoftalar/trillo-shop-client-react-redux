import React, { useState } from 'react';
// Imports from src
import Dropdown from '../Dropdown/Dropdown';
import footerLinks from '../../app/options/footerLinks';
import currencies from '../../app/options/currencies';
import NavigationIcons from './NavigationIcons';
import payIcon from '../../assets/img/payments.png';

interface IProps {
    smallFooter?: boolean;
}

const Footer: React.FC<IProps> = ({ smallFooter }: IProps): JSX.Element => {
    const [current, setCurrent] = useState<{ id: number; value: string }>(
        currencies[0]
    );

    return (
        <footer className="footer">
            <ul className={`footer__nav ${smallFooter && 'u-display-none'}`}>
                {footerLinks.map((item) => (
                    <li className="footer__item" key={item.text}>
                        <a href="/" className="footer__link">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>

            <div
                className={`footer__contact-box u-display-none-s ${
                    smallFooter && 'u-display-none'
                }`}
            >
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
                        src={payIcon}
                        alt="Payments options"
                        className="footer__img"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
