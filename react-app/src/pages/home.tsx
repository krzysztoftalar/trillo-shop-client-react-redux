import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import useWindowSize from '../app/customHooks/useWindowSize';
import { RootState } from '../store/rootState';
import Backdrop from '../components/Backdrop/Backdrop';
import useTimeOut from '../app/customHooks/useTimeOut';
import { handleSideDrawer } from '../store/ui/action';

const Home = (): ReactElement => {
    const open = useSelector<RootState>((state) => state.ui.openSideDrawer);
    const dispatch = useDispatch();

    // Unmount sidebar after animation ends
    const [shouldRender, setShouldRender] = useState(open);
    useTimeOut(() => setShouldRender(open), open ? 0 : 400);

    // Handle click on div Backdrop, set SideDrawer open to false
    const handleBackdrop = () => {
        dispatch(handleSideDrawer());
    };

    // Render Backdrop
    const width = useWindowSize();
    const renderBackdrop = () => {
        if (open && width > 400 && width < 1200) {
            return <Backdrop handleBackdrop={handleBackdrop} />;
        }
        return null;
    };

    return (
        <div className="container">
            {/* Backdrop */}
            {renderBackdrop()}

            {/* Header */}
            <Header />
            <SideBar />
            {shouldRender && <SideDrawer />}
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
