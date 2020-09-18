import React from 'react';
// Imports from src
import Header from '../components/Header/Header';
import { imagesDetails } from '../app/data/images';
import Gallery from '../components/Carousel/Gallery';
import SocialPillBtn from '../components/Navigation/SocialPillBtn';
import AddToCartForm from '../components/Product/AddToCartForm';
import WishlistBtn from '../components/Navigation/WishlistBtn';
import Footer from '../components/Home/Footer';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import useSideDrawer from '../app/hooks/useSideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';
import Rating from '../components/Rating/Rating';

const rating = ((3.5 / 5) * 100).toPrecision(3);

const Product = (): JSX.Element => {
    const { shouldRender, handleBackdrop, open } = useSideDrawer();

    return (
        <div className="product">
            {/* Backdrop */}
            <Backdrop handleBackdrop={handleBackdrop} open={open} />

            {/* Header */}
            <Header props="search__input--pill" />

            {/* Mobile menu */}
            {shouldRender && <SideDrawer />}

            {/* Product images */}
            <div className="product__gallery-box">
                <Gallery images={imagesDetails} />
            </div>

            {/* Product summary content */}
            <div className="product__summary-box">
                <h1 className="product__title">VIA Backpack</h1>

                <p className="product__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>

                {/* Rating */}
                <div className="product__rating-box">
                    <Rating rating={rating} />
                </div>

                <p className="product__price">$ 120</p>

                {/* Selection form */}
                <AddToCartForm />

                {/* Tags */}
                <div className="product__meta-box">
                    <div className="product__meta-group">
                        <span className="product__tag">Category</span>
                        <button className="product__btn-link" type="button">
                            Accessories
                        </button>
                    </div>

                    <div className="product__meta-group">
                        <span className="product__tag">Tags</span>
                        <button className="product__btn-link" type="button">
                            Accessories
                        </button>
                        ,&nbsp;
                        <button className="product__btn-link" type="button">
                            Backpack
                        </button>
                        ,&nbsp;
                        <button className="product__btn-link" type="button">
                            Bags
                        </button>
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
