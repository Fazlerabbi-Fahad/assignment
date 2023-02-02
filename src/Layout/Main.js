import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHome from '../Pages/Home/NavHome';
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavHome></NavHome>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;