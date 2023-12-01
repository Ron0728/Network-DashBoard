import React from "react";

const Details = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col gap-3 p-3 m-2">
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          HostName :
        </span>
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          IP Adsress :
        </span>
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          MAC Address :
        </span>
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          Status :
        </span>
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          Interface :
        </span>
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          :
        </span>
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          :
        </span>
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          :
        </span>
        <span className="bg-slate-300 w-72 p-2 rounded-sm border-2 border-gray-800">
          :
        </span>
      </div>
      <div className=" w-1/2">
        <div className="flex gap-3 m-2 font-bold justify-center items-center">
          Number of Connected Devices :
          <div className="bg-white p-2"> 4 /16</div>
        </div>
        <div className=" bg-slate-300 w-full h-5/6 border-2 border-gray-800"></div>
      </div>
    </div>
  );
};

export default Details;
