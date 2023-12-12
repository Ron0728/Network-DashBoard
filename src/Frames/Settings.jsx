import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-[15%] bg-[url('1.jpg')] bg-cover p-5 justify-center">
        <div className="flex justify-between">
          <div className="font-bold flex justify-center p-5 animate-pulse ">
            DashBoard
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex p-1 shadow-black shadow-lg justify-center items-center bg-white rounded-3xl">
              <input
                placeholder="Search . . ."
                className=" rounded-2xl outline-none p-1 w-96 h-9"
              />
              <div>-O</div>
            </div>
          </div>
          <div className="flex gap-16 text-gray-600">
            <button
              className="border-2 border-transparent
             hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
             hover:text-warmGray-100 "
              onClick={() => navigate("/main")}
            >
              Home
            </button>
            <button
              className="border-2 border-transparent
             hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
             hover:text-warmGray-100 "
            >
              Settings
            </button>
            <button
              className="border-2 border-transparent
             hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
             hover:text-warmGray-100 "
              onClick={() => navigate("/help")}
            >
              Help
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-[url('2.jpg')] bg-cover flex-col justify-center h-[85%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
