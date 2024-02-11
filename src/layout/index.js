import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarFix from '../components/NavbarFix';

const Layout = () => {
    return (
        <div>
            <NavbarFix />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout; <Navbar />