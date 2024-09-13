import React from 'react';
import { AiOutlineDollarCircle, AiOutlineProduct } from 'react-icons/ai';
import { CiBag1 } from 'react-icons/ci';
import { FaVanShuttle } from 'react-icons/fa6';

const CardC = () => {
    return (
        <div className='flex justify-between items-start '>
            {/* revenue */}
            <div className='flex justify-between items-start hover:translate-y-1 transition-transform duration-300 hover:shadow-lg  bg-white w-[22%] p-3 gap-4  border-[#403f3f] border-1.5 rounded-xl'>
              <div className='w-16 h-16 flex justify-center items-center rounded-full bg-green-200'>
              <AiOutlineDollarCircle className=' text-3xl bg-green-600 text-white rounded-full' />
              </div>
              <div className='space-y-2'>
                <h2 className='text-xl font-semibold'>Revenue</h2>
                <h2 className='text-2xl font-bold '>$13,456.5</h2>
                <p className='text-xs'>Shipping fees are not included</p>
                
              </div>
            </div>


            <div className='flex justify-around items-start hover:translate-y-1 transition-transform  duration-300 hover:shadow-lg bg-white w-[22%] p-3 gap-2 borrder-1 border-[#403f3f] rounded-xl'>
              <div className=' rounded-full w-16 h-16 flex justify-center items-center '>
              <FaVanShuttle className=' text-3xl text-green-600  rounded-full' />
              </div>
              <div className='space-y-2'>
                <h2 className='text-xl font-semibold'>Orders</h2>
                <h2 className='text-2xl font-bold '>53.668</h2>
                <p className='text-xs'>Excluding orders in <br />transit</p>
              </div>
            </div>



            <div className='flex justify-around  duration-300 items-start hover:translate-y-1 transition-transform hover:shadow-lg bg-white w-[22%] p-3 gap-4 borrder-1 border-[#403f3f] rounded-xl'>
              <div className=' rounded-full w-16 h-16 flex justify-center items-center '>
              <AiOutlineProduct className=' text-3xl text-orange-400  rounded-full' />
              </div>
              <div className='space-y-2'>
                <h2 className='text-xl font-semibold'>Products</h2>
                <h2 className='text-2xl font-bold '>9.856</h2>
                <p className='text-xs'>In 19 Categories</p>
              </div>
            </div>


            <div className='flex justify-around  duration-300 items-start hover:translate-y-1 transition-transform hover:shadow-lg bg-white w-[22%] p-3 gap-4 borrder-1 border-[#403f3f] rounded-xl'>
              <div className=' rounded-full w-16 h-16 flex justify-center items-center '>
              <CiBag1 className=' text-3xl text-blue-400  rounded-full' />
              </div>
              <div className='space-y-2'>
                <h2 className='text-xl font-semibold'>Monthly Earning</h2>
                <h2 className='text-2xl font-bold '>$6,982</h2>
                <p className='text-xs'>Based in your local time.</p>
              </div>
            </div>
        </div>
    );
};

export default CardC;