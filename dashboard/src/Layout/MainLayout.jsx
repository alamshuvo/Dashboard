import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='font-Quicksand '>
            <Navbar></Navbar>
           <div className='bg-main-bg '>
           <div className='p-4 '>
                <Outlet></Outlet>
            </div>
           </div>
        </div>
    );
};

export default MainLayout;