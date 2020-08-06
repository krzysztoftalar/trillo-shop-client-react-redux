import React from 'react';

interface IProps {
    setOpen: (open: boolean) => void;
    open: boolean;
}

const HamburgerButton: React.FC<IProps> = ({ setOpen, open }: IProps): JSX.Element => {
    return (
        <button
            onClick={() => setOpen(!open)}
            className={`hamburger-btn ${open ? 'hamburger-btn--open' : ''}`}
            type="button"
        >
            <span className="hamburger-btn__icon" />
        </button>
    );
};

export default HamburgerButton;
