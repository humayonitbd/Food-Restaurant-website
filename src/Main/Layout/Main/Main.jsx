// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../../SharedPage/Header';
import Footer from '../../SharedPage/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;