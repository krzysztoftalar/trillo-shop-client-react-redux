import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import HamburgerButton from '../Buttons/HamburgerButton';
import Navigation from '../Navigation/Navigation';
import headerLinks from '../../app/options/headerLinks';
import accountLinks from '../../app/options/accountLinks';
import SearchForm from '../Forms/SearchForm';
import NavIconBox from '../Navigation/NavIconBox';
import { icons } from '../../app/options/navIcons';
import AuthForm from '../User/Forms/AuthForm';
import { RootState } from '../../store/rootState';
import { handleModal, handleSideDrawer } from '../../store/ui/action';
import { checkIfIsLoggedIn } from '../../store/user/selectors';
import { logout } from '../../store/user/action';

interface StateProps {
    openSideDrawer: boolean;
}

interface IProps {
    props?: string;
}

const Header: React.FC<IProps> = ({ props }: IProps): JSX.Element => {
    const dispatch = useDispatch();

    const { openSideDrawer } = useSelector<RootState, StateProps>((state) => {
        return { openSideDrawer: state.ui.openSideDrawer };
    });
    const isLoggedIn = useSelector(checkIfIsLoggedIn());

    // Classes for styling Navigation component
    const navProps = {
        ul: 'navigation--col navigation--box',
        li: 'navigation__item--box',
        a: 'navigation__link--box',
    };

    return (
        <header className="header">
            {/* -------- Hamburger button box -------- */}
            <div className="header__hamburger-box">
                <HamburgerButton
                    handleHamburger={() => dispatch(handleSideDrawer())}
                    open={openSideDrawer}
                />
            </div>

            {/* -------- Left box -------- */}
            <nav className="header__left-items">
                <h3 className="site-title">Trillo</h3>

                <div className="u-display-none-l">
                    <Navigation links={headerLinks} />
                </div>
            </nav>

            {/* -------- Right box -------- */}
            <nav className="header__right-items">
                {/* -------- Sign In -------- */}
                {!isLoggedIn && (
                    <div className="u-display-none-l">
                        <button
                            onClick={() => dispatch(handleModal(<AuthForm />))}
                            className="header__account-link"
                            type="button"
                        >
                            Sign In
                        </button>
                    </div>
                )}

                {/* -------- My Account box -------- */}
                {isLoggedIn && (
                    <div className="header__account u-display-none-l">
                        <button className="header__account-link" type="button">
                            My Account
                        </button>

                        <div className="header__account-links">
                            <Navigation props={navProps} links={accountLinks} />

                            <div className="header__account-links-box">
                                <button
                                    onClick={() => dispatch(logout())}
                                    className="btn-link btn-link--small full-underline"
                                    type="button"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* -------- Search form -------- */}
                <div className="header__right-items--form">
                    <SearchForm props={props} />
                </div>

                {/* -------- Cart and wishlist quantity -------- */}
                <div className="u-display-none-l">
                    <NavIconBox props={icons[0]} />
                </div>

                <NavIconBox props={icons[1]} />
            </nav>
        </header>
    );
};

export default Header;
