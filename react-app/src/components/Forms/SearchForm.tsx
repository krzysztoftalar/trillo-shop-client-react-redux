import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
// Imports from src
import svg from '../../assets/img/sprite.svg';

interface IProps {
    props?: string;
}

const SearchForm: React.FC<IProps> = ({ props }: IProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    const form = useRef() as MutableRefObject<HTMLFormElement>;
    const textInput = useRef() as MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (form.current.contains(e.target as Node)) {
                return;
            }

            setOpen(false);
        };

        document.addEventListener('mousedown', handleClick);

        return () => document.removeEventListener('mousedown', handleClick);
    }, [form]);

    return (
        <form action="#" className="search" ref={form}>
            <input
                type="text"
                className={`search__input ${
                    open ? `search__input--active` : ''
                } ${props}`}
                placeholder="Search"
                ref={textInput}
            />

            <button
                className="search__button"
                onClick={() => {
                    setOpen(!open);
                    textInput.current.focus();
                }}
                type="button"
            >
                <svg className="search__icon">
                    <use xlinkHref={`${svg}#icon-search`} />
                </svg>
            </button>
        </form>
    );
};

export default SearchForm;
