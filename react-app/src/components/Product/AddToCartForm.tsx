import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
// Imports from src
import sizes from '../../app/options/sizes';
import colors from '../../app/options/colors';
import svg from '../../assets/img/sprite.svg';

const AddToCartForm = (): JSX.Element => {
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState<{ id: number; size: string }>({
        id: sizes[0].id,
        size: sizes[0].size,
    });
    const [color, setColor] = useState<{ id: number; color: string }>({
        id: colors[0].id,
        color: colors[0].color,
    });

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data: any) => console.log(data);

    const handleQtyChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        const quantity = parseInt(value, 10);

        if (!Number.isNaN(Number(quantity))) {
            setQty(quantity);
            setValue('quantity', value);
        }
    };

    const handleSizeChange = (id: number) => {
        const newSize = sizes.filter((item) => item.id === id)[0];
        setSize(newSize);
        setValue('size', newSize);
    };

    const handleColorChange = (id: number) => {
        const newColor = colors.filter((item) => item.id === id)[0];
        setColor(newColor);
        setValue('color', newColor);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="product__form"
            action="#"
        >
            <p className="product__text">Size</p>

            <div className="product__sizes-box">
                {sizes.map((item) => (
                    <button
                        onClick={() => handleSizeChange(item.id)}
                        ref={register}
                        key={item.id}
                        value={size.size}
                        name="size"
                        className={`product__btn-size ${
                            item.id === size.id
                                ? 'product__btn-size--active'
                                : ''
                        }`}
                        type="button"
                    >
                        {item.size}
                    </button>
                ))}
            </div>

            <p className="product__text">Color</p>

            <div className="product__colors-box">
                {colors.map((item) => (
                    <button
                        onClick={() => handleColorChange(item.id)}
                        ref={register}
                        key={item.id}
                        value={color.color}
                        name="color"
                        className={`product__btn-color ${
                            item.id === color.id
                                ? 'product__btn-color--active'
                                : ''
                        }`}
                        style={{ backgroundColor: item.color }}
                        type="button"
                    />
                ))}
            </div>

            <div className="product__form-qty-box">
                <div className="quantity">
                    <button
                        onClick={() => {
                            if (qty > 1) setQty(qty - 1);
                        }}
                        className="quantity__btn"
                        type="button"
                    >
                        <svg className="quantity__btn-icon">
                            <use xlinkHref={`${svg}#icon-minus`} />
                        </svg>
                    </button>

                    <input
                        ref={register({ pattern: /^[0-9]*$/ })}
                        value={qty}
                        onChange={(e) => handleQtyChange(e)}
                        name="quantity"
                        type="number"
                        min="1"
                        max=""
                        className="quantity__input"
                    />

                    <button
                        onClick={() => setQty(qty + 1)}
                        className="quantity__btn"
                        type="button"
                    >
                        <svg className="quantity__btn-icon">
                            <use xlinkHref={`${svg}#icon-plus`} />
                        </svg>
                    </button>
                </div>

                <button className="btn-submit" type="submit">
                    Add to cart
                </button>
            </div>
        </form>
    );
};

export default AddToCartForm;
