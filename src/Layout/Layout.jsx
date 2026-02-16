import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className=''>
           <header>
                <Navbar></Navbar>
           </header>
           <Outlet></Outlet>
           <footer>
                <Footer></Footer>
           </footer>
        </div>
    );
};

export default Layout;