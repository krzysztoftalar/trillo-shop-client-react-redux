import React, { ReactElement, useState } from 'react';
// Imports from src
import Carousel from '../components/Carousel/Carousel';
import SideBar from '../components/Home/SideBar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Header from '../components/Header/Header';
import Backdrop from '../components/Backdrop/Backdrop';
import headerImages from '../app/options/headerImages';

const Home = (): ReactElement => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Backdrop setOpen={setOpen} open={open} />
            <Header setOpen={setOpen} open={open} />
            <SideBar />
            <SideDrawer open={open} />
            <div className="header-content">
                <Carousel images={headerImages} />
            </div>
        </>
    );
};

export default Home;
