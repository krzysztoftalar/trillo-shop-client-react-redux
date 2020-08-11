import React, { ReactElement, useState } from 'react';
// Imports from src
import Carousel from '../components/Carousel/Carousel';
import SideBar from '../components/Home/SideBar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Header from '../components/Header/Header';
import Backdrop from '../components/Backdrop/Backdrop';
import headerImages from '../app/options/headerImages';
import Products from '../components/Home/Products';
import Deal from '../components/Home/Deal';

const Home = (): ReactElement => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Backdrop setOpen={setOpen} open={open} />

            {/* Section Header */}
            <Header setOpen={setOpen} open={open} />
            <SideBar />
            <SideDrawer setOpen={setOpen} open={open} />
            <div className="header-content">
                <Carousel images={headerImages} />
            </div>

            {/* Section Products */}
            <Products />

            {/* Section Deal of the week */}
            <Deal />
        </>
    );
};

export default Home;
