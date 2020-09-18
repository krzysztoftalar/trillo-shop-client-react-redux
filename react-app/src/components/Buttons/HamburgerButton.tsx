import React from 'react';

interface IProps {
    handleHamburger: () => void;
    open: boolean;
}

const HamburgerButton: React.FC<IProps> = ({
    handleHamburger,
    open,
}: IProps): JSX.Element => {
    return (
        <button
            onClick={handleHamburger}
            className={`hamburger-btn ${open ? 'hamburger-btn--open' : ''}`}
            type="button"
        >
            <span className="hamburger-btn__icon" />
        </button>
    );
};

export default HamburgerButton;
