import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import SearchForm from '../Forms/SearchForm';
import headerLinks from '../../app/options/headerLinks';
import NavIconBox from '../Navigation/NavIconBox';
import Navigation from '../Navigation/Navigation';
import { icons, iconsText } from '../../app/options/navIcons';
import NavigationItem from '../Navigation/NavigationItem';
import NavigationIcons from '../Home/NavigationIcons';
import Dropdown from '../Dropdown/Dropdown';
import currencies from '../../app/options/currencies';
import Header from '../Header/Header';
import { RootState } from '../../store/rootState';
import useBodyClass from '../../app/hooks/useBodyClass';
import { checkIfIsLoggedIn } from '../../store/user/selectors';
import { logout } from '../../store/user/action';
import { handleModal, handleSideDrawer } from '../../store/ui/action';
import SideModal from '../Modal/SideModal';
import LoginForm from '../User/Forms/LoginForm';

const SideDrawer = (): JSX.Element => {
    const dispatch = useDispatch();

    const open = useSelector<RootState, boolean>(
        (state) => state.ui.openSideDrawer
    );
    const isLoggedIn = useSelector(checkIfIsLoggedIn());

    // Classes for styling Navigation component
    const navProps = {
        ul: 'navigation--col',
        li: 'navigation__item--col',
        a: '',
    };

    useBodyClass('overflow-hidden');

    const handleLogout = () => {
        dispatch(logout());
        dispatch(handleSideDrawer());
    };

    const handleLogin = () => {
        dispatch(handleSideDrawer());
        dispatch(
            handleModal(<SideModal title="Sign In" content={<LoginForm />} />)
        );
    };

    const [current, setCurrent] = useState<{ id: number; value: string }>(
        currencies[0]
    );

    return (
        <div
            className={`side-drawer ${
                open ? 'moveAndFadeInFromLeft' : 'moveAndFadeOutToLeft'
            }`}
        >
            <div className="side-drawer__mobile-header">
                <Header />
            </div>

            <SearchForm props="search__input--right-side" />

            <Navigation props={navProps} links={headerLinks} />

            <hr className="side-drawer__divider" />

            <div className="side-drawer__text-box">
                <NavigationItem props={navProps} link={iconsText[1]} />
                <NavIconBox props={icons[1]} />
            </div>

            <div className="side-drawer__text-box">
                <NavigationItem props={navProps} link={iconsText[0]} />
                <NavIconBox props={icons[0]} />
            </div>

            <hr className="side-drawer__divider" />

            <div className="side-drawer__text-box">
                <span className="side-drawer__text">Currency</span>
                <Dropdown
                    options={currencies}
                    current={current}
                    setCurrent={setCurrent}
                />
            </div>

            <hr className="side-drawer__divider" />

            {/* <NavigationItem props={navProps} link={iconsText[2]} /> */}
            {isLoggedIn ? (
                <>
                    <div className="side-drawer__btn-box">
                        <button
                            className="btn-link full-underline full-underline--small"
                            type="button"
                        >
                            My Account
                        </button>
                    </div>
                    <div className="side-drawer__btn-box">
                        <button
                            onClick={handleLogout}
                            className="btn-link full-underline full-underline--small"
                            type="button"
                        >
                            Sign Out
                        </button>
                    </div>
                </>
            ) : (
                <div className="side-drawer__btn-box">
                    <button
                        onClick={handleLogin}
                        className="btn-link full-underline full-underline--small"
                        type="button"
                    >
                        Sign In
                    </button>
                </div>
            )}

            <hr className="side-drawer__divider" />

            <div className="side-drawer__icons-box">
                <NavigationIcons />
            </div>
        </div>
    );
};

export default SideDrawer;
