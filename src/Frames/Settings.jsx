import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-slate-500">
      <div className="flex flex-col bg-slate-900 p-5 justify-center">
        <div className="flex justify-between">
          <div className="pl-3 ">
            <div className="flex bg-white rounded-2xl">
              <input
                placeholder="search"
                className=" rounded-2xl outline-none p-1 w-96 h-9"
              />
              <div>-O</div>
            </div>
          </div>
          <div className="flex gap-16 text-gray-600">
            <button
              className="border-2 border-slate-900
             hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
             hover:text-warmGray-100 "
              onClick={() => navigate("/main")}
            >
              Home
            </button>
            <button
              className="border-2 border-slate-900
             hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
             hover:text-warmGray-100 "
            >
              Settings
            </button>
            <button
              className="border-2 border-slate-900
             hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
             hover:text-warmGray-100 "
              onClick={() => navigate("/help")}
            >
              Help
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
