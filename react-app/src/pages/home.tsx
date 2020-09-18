import React, { ReactElement } from 'react';
// Imports from src
import Carousel from '../components/Carousel/Carousel';
import SideBar from '../components/Home/SideBar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Header from '../components/Header/Header';
import headerImages from '../app/options/headerImages';
import DealSection from '../components/Home/DealSection';
import ProductsSection from '../components/Home/ProductsSection';
import SubscribeSection from '../components/Home/SubscribeSection';
import PromoSection from '../components/Home/PromoSection';
import Footer from '../components/Home/Footer';
import useSideDrawer from '../app/hooks/useSideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

const Home = (): ReactElement => {
    const { handleBackdrop, shouldRender, open } = useSideDrawer();

    return (
        <div className="container">
            {/* Backdrop */}
            <Backdrop handleBackdrop={handleBackdrop} open={open} />

            {/* Header */}
            <Header />

            {/* SideBar */}
            <SideBar />

            {/* Mobile menu */}
            {shouldRender && <SideDrawer />}

            {/* Carousel */}
            <div className="header-content">
                <Carousel images={headerImages} />
            </div>

            {/* Products section */}
            <ProductsSection />

            {/* Deal section */}
            <DealSection />

            {/* Subscribe section */}
            <SubscribeSection />

            {/* Promo section */}
            <PromoSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
