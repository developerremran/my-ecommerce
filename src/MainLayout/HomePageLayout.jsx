import React from 'react';
import Header from '../ShearSection/Header/Header';
import Footer from '../ShearSection/Footer/Footer';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return (
        <div className='mainWidth'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomePageLayout;