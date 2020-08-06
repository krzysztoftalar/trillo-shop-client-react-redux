import React from 'react';
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

interface IProps {
    open: boolean;
}

const SideDrawer: React.FC<IProps> = ({ open }: IProps): JSX.Element => {
    // Classes for styling Navigation component
    const navProps = {
        ul: 'navigation--col',
        li: 'navigation__item--col',
        a: '',
    };

    return (
        <div className={`side-drawer ${open ? 'side-drawer--open fadeIn--slow' : 'fadeOut'}`}>
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
                <Dropdown options={currencies} />
            </div>

            <hr className="side-drawer__divider" />

            <NavigationItem props={navProps} link={iconsText[2]} />

            <hr className="side-drawer__divider" />

            <div className="side-drawer__icons-box">
                <NavigationIcons />
            </div>
        </div>
    );
};

export default SideDrawer;
