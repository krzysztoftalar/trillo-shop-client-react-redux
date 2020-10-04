import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import { selectFeaturedProducts } from '../../store/product/selectors';
import ProductCard from '../ProductCard/ProductCard';
import OutlineButton from '../Buttons/OutlineButton';
import { getProducts } from '../../store/product/action';

const ProductsSection = (): JSX.Element => {
    // Get featured products
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts([{ predicate: 'featured' }], 'featured'));
    }, [dispatch]);

    const products = useSelector(selectFeaturedProducts());

    return (
        <section className="products">
            <div className="products__box">
                <div className="products__title">
                    <h2 className="heading-secondary">
                        Discover Our Best Products
                    </h2>
                </div>
                <p className="products__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>

            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

            <div className="products__button-box">
                <OutlineButton content="See all products" />
            </div>
        </section>
    );
};

export default ProductsSection;
