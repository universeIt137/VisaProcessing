import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Mainlayout = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;