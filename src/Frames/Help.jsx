import React from "react";
import { useNavigate } from "react-router-dom";
const Help = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-screen bg-slate-700 backdrop-blur-xl h-screen justify-center items-center ">
      <div className="flex flex-col justify-between bg-slate-500 p-64 rounded-3xl ">
        <div>
          <div className=" bg-slate-300">
            <button onClick={() => navigate("/main")}>Back</button>
          </div>
        </div>
        <div>
          <span>help</span>
        </div>
      </div>
    </div>
  );
};

export default Help;
