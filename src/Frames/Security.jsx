import React from "react";
import "C:/Users/Rani/Desktop/frontend/src/Css/ON-OFFButton.css";
import ONOFF from "../Components/ONOFF";
const Security = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-5 m-4">
        <div className="flex gap-5">
          <div className="flex flex-col border-2 w-60 h-60 font-bold justify-between p-5 items-center ">
            <div>firewall</div>
            <div>Info</div>
            <ONOFF />
          </div>
          <div className="flex flex-col border-2 w-60 h-60 font-bold justify-between p-5 items-center ">
            <div>VPN</div>
            <div>Info</div>
            <ONOFF />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col border-2 w-60 h-60 font-bold justify-between p-5 items-center ">
            <div>System</div>
            <div>status</div>
          </div>
          <div className="flex flex-col border-2 w-60 h-60 font-bold justify-between p-5 items-center ">
            <div>Storage</div>
            <div>Status : Good</div>
            <div>Used : 458.67 GB / 1 TB</div>
            <div className="bg-white w-full flex h-5">
              <div className="w-[45%] bg-red-700"></div>
              <div className="w-[5%] bg-yellow-700"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-3xl m-5 border-4 border-black"></div>
    </div>
  );
};

export default Security;
