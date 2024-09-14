import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import CardC from "../Components/CardC";
import Charts from "../Components/Charts";
import BarCharts from "../Components/Bar";
import Progress from "../Components/Progress";

const Dashboard = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      {/* first part */}
      <div className="flex justify-between items-center">
        <div className="space-y-3 ">
          <h2 className="font-bold text-3xl">Dashboard</h2>
          <p>Whole data about your business here</p>
        </div>
        <div>
          <button className="px-4 py-3 flex justify-center items-center gap-3 rounded-sm bg-button-bg text-white">
            {" "}
            <MdOutlineCreateNewFolder className="text-2xl" />
            Create Report
          </button>
        </div>
      </div>

      {/* second card part */}
      <div className="mt-10">
        <CardC></CardC>
      </div>
      {/* charts */}
      <div className="flex justify-between gap-10 mt-10">
        {/* first part */}
        <div className="w-[70%]   flex flex-col justify-between  gap-4">
          <div className="bg-white p-5 rounded-lg hover:translate-y-1 transition-transform hover:shadow-lg">
            <div className="mb-10 font-semibold">
              <h1>Sale statistics</h1>
            </div>
            <div className="flex justify-center items-center mb-5 gap-6">
              <div className="flex justify-center items-center gap-2">
                <div className="w-[20px] rounded-full bg-green-300 h-[20px] border-2 border-green-400"></div>
                <p>sales</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="w-[20px] rounded-full bg-orange-300 h-[20px] border-2 border-orange-400"></div>
                <p>Visitors</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="w-[20px] rounded-full bg-[#8884d8] h-[20px] border-2 border-[#8884d8]"></div>
                <p>Products</p>
              </div>
            </div>
            <Charts></Charts>
          </div>
          <div className="flex justify-between  items-center mt-5 ">
            {/* member */}
            <div className="bg-white w-[40%] p-5 rounded-lg hover:translate-y-1 transition-transform hover:shadow-lg flex flex-col gap-7 ">
               <p className="mb-5 font-semibold ">New Member</p>

               <div className="flex justify-center items-center gap-4">
                <img className="w-[50px] rounded-full h-[50px]" src="/public/img/avatar-4.png" alt="" />
                <div className="font-semibold">
                  <h2 className="mb-2">Patric Adams</h2>
                  <p className="text-xs" >Sanfrancisco</p>
                </div>
                <button className="bg-button-bg px-6 py-2 text-white rounded-md">Add</button>
               </div>



               <div className="flex justify-center items-center gap-4">
                <img className="w-[50px] rounded-full h-[50px]" src="/public/img/avatar-3.png" alt="" />
                <div className="font-semibold">
                  <h2 className="mb-2">Dilan Specter</h2>
                  <p className="text-xs" >Sanfrancisco</p>
                </div>
                <button className="bg-button-bg px-6 py-2 text-white rounded-md">Add</button>
               </div>



               <div className="flex justify-center items-center gap-4">
                <img className="w-[50px] rounded-full h-[50px]" src="/public/img/avatar-2 (1).png" alt="" />
                <div className="font-semibold">
                  <h2 className="mb-2">Tomas Baker
                  </h2>
                  <p className="text-xs" >Sanfrancisco</p>
                </div>
                <button className="bg-button-bg px-6 py-2 text-white rounded-md">Add</button>
               </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col  gap-10">
          <div className="bg-white p-5 rounded-lg hover:translate-y-1 transition-transform hover:shadow-lg">
            <BarCharts></BarCharts>
          </div>
          <div className="bg-white p-5 rounded-lg hover:translate-y-1 transition-transform hover:shadow-lg">
            <Progress></Progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
