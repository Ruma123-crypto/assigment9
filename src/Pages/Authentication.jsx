import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default Authentication;