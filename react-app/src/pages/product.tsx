import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Imports from src
import Header from '../components/Header/Header';
import Gallery from '../components/Carousel/Gallery';
import SocialPillBtn from '../components/Navigation/SocialPillBtn';
import AddToCartForm from '../components/Product/AddToCartForm';
import WishlistBtn from '../components/Navigation/WishlistBtn';
import Footer from '../components/Home/Footer';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import useSideDrawer from '../app/hooks/useSideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';
import Rating from '../components/Rating/Rating';
import { getProduct } from '../store/product/action';
import { selectProductState } from '../store/product/selectors';

interface DetailParams {
    id: string;
}

const Product: React.FC<RouteComponentProps<DetailParams>> = ({
    match,
    history,
}): JSX.Element => {
    const { shouldRender, handleBackdrop, open } = useSideDrawer();

    const { product } = useSelector(selectProductState());

    // Get product
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct(Number(match.params.id)));
    }, [match.params.id, history, dispatch]);

    if (!product) return <h1>Product not found</h1>;

    // Calculate rating
    const value = ((product?.rating / 5) * 100).toPrecision(3);
    const count = product.reviews.length;

    return (
        <div className="product" style={{ backgroundColor: product.bgColor }}>
            {/* Backdrop */}
            <Backdrop handleBackdrop={handleBackdrop} open={open} />

            {/* Header */}
            <Header props="search__input--pill" />

            {/* Mobile menu */}
            {shouldRender && <SideDrawer />}

            {/* Product images */}
            <div className="product__gallery-box">
                <Gallery images={product.photos} />
            </div>

            {/* Product summary content */}

            <div className="product__summary-box">
                <h1 className="product__title">{product.name}</h1>

                <p className="product__text">{product.description}</p>

                {/* Rating */}
                <div className="product__rating-box">
                    <Rating rating={{ value, count }} />
                </div>

                <p className="product__price">{product.price}</p>

                {/* Selection form */}
                <AddToCartForm stocks={product.stocks} />

                {/* Tags */}
                <div className="product__meta-box">
                    <div className="product__meta-group">
                        <span className="product__tag">Category</span>
                        <button className="product__btn-link" type="button">
                            {product.category}
                        </button>
                    </div>

                    <div className="product__meta-group">
                        <span className="product__tag">Tags</span>
                        {product.tags.map((x) => (
                            <button className="product__btn-link" type="button">
                                {x.tagId}
                            </button>
                        ))}
                    </div>
                </div>

                <hr className="product__divider" />
            </div>

            {/* Social buttons */}
            <div className="product__social-box">
                <div className="u-display-none-m">
                    <SocialPillBtn />
                </div>
                <WishlistBtn />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Product;
