import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Layout = () => {
    return (
        <div className=''>
           <header>
                <Navbar></Navbar>
           </header>
           <Outlet></Outlet>
           <footer>

           </footer>
        </div>
    );
};

export default Layout;