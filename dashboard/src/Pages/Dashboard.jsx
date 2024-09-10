import React from 'react';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import CardC from '../Components/CardC';

const Dashboard = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            {/* first part */}
           <div className='flex justify-between items-center'>
            <div className='space-y-3 '>
                <h2 className='font-bold text-3xl'>Dashboard</h2>
                <p>Whole data about your business here</p>
            </div>
            <div>
                <button className='px-4 py-3 flex justify-center items-center gap-3 rounded-sm bg-button-bg text-white'> <MdOutlineCreateNewFolder className='text-2xl' />Create Report</button>
            </div>
           </div>

           {/* second card part */}
           <div className='mt-10'>
           <CardC></CardC>
           </div>
        </div>
    );
};

export default Dashboard;