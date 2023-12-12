import React from "react";

const Board = () => {
  return (
    <div className="flex w-full h-full bg-transparent gap-5 p-2">
      <div className="flex flex-col w-1/2 h-full gap-5">
        <div
          className="flex justify-center items-center h-1/2 backdrop-blur-[10px] text-white  
       shadow-white shadow-inner  rounded-3xl hover:-translate-y-2 "
        >
          info1
        </div>
        <div className="flex w-full h-1/2 gap-5">
          <div
            className="flex justify-center items-center  text-white  w-1/2
           backdrop-blur-[10px] hover:-translate-y-2 shadow-white shadow-inner  rounded-3xl "
          >
            info2
          </div>
          <div
            className="flex justify-center items-center  text-white  w-1/2
           backdrop-blur-[10px] hover:-translate-y-2 shadow-white shadow-inner  rounded-3xl "
          >
            info3
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/2 h-full">
        <div
          className="flex justify-center items-center  text-white  h-1/2
         backdrop-blur-[10px] hover:-translate-y-2 shadow-white shadow-inner rounded-3xl "
        >
          info4
        </div>
        <div
          className="flex justify-center items-center  text-white  h-1/2
         backdrop-blur-[10px] hover:-translate-y-2 shadow-white shadow-inner  rounded-3xl "
        >
          info5
        </div>
      </div>
    </div>
  );
};

export default Board;
