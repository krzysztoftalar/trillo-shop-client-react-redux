import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
// Imports from src
import svg from '../../assets/img/sprite.svg';
import { IStock } from '../../models/stock';
import { addToCart } from '../../store/cart/action';
import ButtonIndicator from '../Forms/ButtonIndicator';
import { selectLoader } from '../../store/ui/selectors';
import { ADD_TO_CART } from '../../store/cart/types';

interface IProps {
    stocks: IStock[];
}

const AddToCartForm: React.FC<IProps> = ({ stocks }): JSX.Element => {
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);
    const [myStock, setMyStock] = useState<IStock>(stocks[0]);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        dispatch(addToCart(myStock.id, qty));
    };

    const handleQtyChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        const quantity = parseInt(value, 10);

        if (!Number.isNaN(Number(quantity))) {
            setQty(quantity);
        }
    };

    const handleStockChange = (id: number) => {
        const stock = stocks.find((item) => item.id === id);
        if (stock) {
            setMyStock(stock);
        }
    };

    // Check if product has color or size
    const hasColors = stocks.some((x) => x.productColor === null);
    const hasSizes = stocks.some((x) => x.productSize === null);

    const submitting = useSelector(selectLoader(ADD_TO_CART));

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="product__form"
            action="#"
        >
            {!hasSizes && <p className="product__text">Size</p>}

            {!hasSizes && (
                <div className="product__sizes-box">
                    {_.uniqBy(stocks, 'productSize').map((stock) => (
                        <button
                            onClick={() => handleStockChange(stock.id)}
                            key={stock.id}
                            value={myStock.productSize}
                            name="size"
                            className={`product__btn-size ${
                                stock.productSize === myStock.productSize
                                    ? 'product__btn-size--active'
                                    : ''
                            }`}
                            type="button"
                        >
                            {stock.productSize}
                        </button>
                    ))}
                </div>
            )}

            {!hasColors && <p className="product__text">Color</p>}

            {!hasColors && (
                <div className="product__colors-box">
                    {stocks
                        .filter((x) => x.productSize === myStock.productSize)
                        .map((stock) => (
                            <button
                                onClick={() => handleStockChange(stock.id)}
                                key={stock.id}
                                value={myStock.productColor}
                                name="color"
                                className={`product__btn-color ${
                                    stock.id === myStock.id
                                        ? 'product__btn-color--active'
                                        : ''
                                }`}
                                style={{ backgroundColor: stock.productColor }}
                                type="button"
                            />
                        ))}
                </div>
            )}

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
                        value={qty}
                        onChange={(e) => handleQtyChange(e)}
                        name="quantity"
                        type="number"
                        min="1"
                        max={myStock.quantity}
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
                    {submitting ? <ButtonIndicator /> : 'Add to cart'}
                </button>
            </div>
        </form>
    );
};

export default AddToCartForm;
