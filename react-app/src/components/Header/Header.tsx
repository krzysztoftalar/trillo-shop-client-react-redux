import React from 'react';
// Imports from src
import HamburgerButton from '../Buttons/HamburgerButton';
import Navigation from '../Navigation/Navigation';
import headerLinks from '../../app/options/headerLinks';
import accountLinks from '../../app/options/accountLinks';
import SearchForm from '../Forms/SearchForm';
import NavIconBox from '../Navigation/NavIconBox';
import { icons } from '../../app/options/navIcons';

interface IProps {
    setOpen: (open: boolean) => void;
    open: boolean;
}

const Header: React.FC<IProps> = ({ setOpen, open }: IProps): JSX.Element => {
    // Classes for styling Navigation component
    const navProps = {
        ul: 'navigation--col navigation--box',
        li: 'navigation__item--box',
        a: 'navigation__link--box',
    };

    const isLoggedIn = true;

    return (
        <header className="header">
            {/* -------- Hamburger button box -------- */}
            <div className="header__hamburger-box">
                <HamburgerButton setOpen={setOpen} open={open} />
            </div>

            {/* -------- Left box -------- */}
            <nav className="header__left-items">
                <h3 className="site-title">Trillo</h3>

                <div className="header__left-items--bp">
                    <Navigation links={headerLinks} />
                </div>
            </nav>

            {/* -------- Right box -------- */}
            <nav className="header__right-items">
                {/* -------- Sign In -------- */}
                {!isLoggedIn && (
                    <div className="header__right-items--bp">
                        <a href="/" className="header__account-link">
                            Sign In
                        </a>
                    </div>
                )}

                {/* -------- My Account box -------- */}
                {isLoggedIn && (
                    <div className="header__account header__right-items--bp">
                        <a href="/" className="header__account-link">
                            My Account
                        </a>

                        <div className="header__account-links">
                            <Navigation props={navProps} links={accountLinks} />
                        </div>
                    </div>
                )}

                {/* -------- Search form -------- */}
                <div className="header__right-items--form">
                    <SearchForm />
                </div>

                {/* -------- Cart and wishlist quantity -------- */}
                <div className="header__right-items--bp">
                    <NavIconBox props={icons[0]} />
                </div>

                <NavIconBox props={icons[1]} />
            </nav>
        </header>
    );
};

export default Header;
