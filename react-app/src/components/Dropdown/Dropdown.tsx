import React, { useEffect, useState } from 'react';
// Imports from src
import svg from '../../assets/img/sprite.svg';

interface IProps {
    options: {
        id: number;
        value: string;
    }[];
}

const Dropdown: React.FC<IProps> = ({ options }: IProps): JSX.Element => {
    const [current, setCurrent] = useState<{ id: number; value: string }>({
        id: 0,
        value: '',
    });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setCurrent(options[0]);
    }, [options]);

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
                                className="dropdown__option"
                                onClick={() => {
                                    setCurrent((prev) => ({
                                        ...prev,
                                        id: opt.id,
                                        value: opt.value,
                                    }));
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
