import React from "react";

const Progress = () => {
  return (
    <div className="space-y-5">
    <div className="flex flex-col flex-start">
    <p className="mb-2"> Facebook</p>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
       
        <div
          className="bg-green-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[15%]"
         
        >
          {" "}
          15%
        </div>
      </div>
    </div>

    <div className="flex flex-col flex-start">
    <p className="mb-2"> Instragram</p>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
       
        <div
          className="bg-green-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[65%]"
         
        >
          {" "}
          65%
        </div>
      </div>
    </div>



    <div className="flex flex-col flex-start">
    <p className="mb-2">Google</p>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
       
        <div
          className="bg-green-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[51%]"
         
        >
          {" "}
          51%
        </div>
      </div>
    </div>


    <div className="flex flex-col flex-start">
    <p className="mb-2">Twiter</p>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
       
        <div
          className="bg-green-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[80%]"
         
        >
          {" "}
          80%
        </div>
      </div>
    </div>

    <div className="flex flex-col flex-start">
    <p className="mb-2">Other</p>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
       
        <div
          className="bg-green-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[80%]"
         
        >
          {" "}
          80%
        </div>
      </div>
    </div>
    </div>
  );
};

export default Progress;
