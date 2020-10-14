import React, { useState } from 'react';
// Imports from src
import svg from '../../assets/img/sprite.svg';

interface IProps {
    options: {
        id: number;
        value: string;
    }[];
    setCurrent: (opt: { id: number; value: string }) => void;
    current: { id: number; value: string };
}

const Dropdown: React.FC<IProps> = ({
    options,
    setCurrent,
    current,
}: IProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown" onMouseEnter={() => setOpen(true)}>
            <div className="dropdown__box">
                <span className="dropdown__value">{current.value}</span>

                <svg className="dropdown__icon">
                    <use xlinkHref={`${svg}#icon-chevron-down`} />
                </svg>
            </div>

            {open && (
                <ul className="dropdown__list">
                    {options.map((opt) => (
                        <li key={opt.id}>
                            <span
                                className={`dropdown__option ${
                                    opt.id === current.id
                                        ? 'dropdown__option--active'
                                        : ''
                                }`}
                                onClick={() => {
                                    setCurrent(opt);
                                    setOpen(false);
                                }}
                            >
                                {opt.value}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
