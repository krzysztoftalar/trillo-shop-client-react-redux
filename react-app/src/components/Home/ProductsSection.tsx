import React from 'react';
// Imports from src
import ProductCard from '../ProductCard/ProductCard';
import OutlineButton from '../Buttons/OutlineButton';

const ProductsSection = (): JSX.Element => {
    return (
        <section className="products">
            <div className="products__box">
                <div className="products__title">
                    <h2 className="heading-secondary">Discover Our Best Products</h2>
                </div>
                <p className="products__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

            <div className="products__button-box">
                <OutlineButton content="See all products" />
            </div>
        </section>
    );
};

export default ProductsSection;
