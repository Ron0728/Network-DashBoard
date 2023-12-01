import React from "react";

const Board = () => {
  return (
    <div className="flex ">
      <div className="h-fit w-1/2">
        <div className="border-2 h-fit rounded-xl border-gray-600 p-40 m-1 ml-4 mt-2">
          info
        </div>
        <div className="flex ">
          <div className="border-2 w-1/2 h-fit rounded-xl border-gray-600 p-16 m-1 ml-4 mt-2">
            infoooo
          </div>
          <div className="border-2 w-1/2 h-fit rounded-xl border-gray-600 p-16 m-1 ml-4 mt-2">
            infoooo
          </div>
        </div>
      </div>
      <div className="w-1/2 h-fit">
        <div className="border-2 h-fit rounded-xl border-gray-600 p-40 m-1 ml-4 mt-2 ">
          info
        </div>
        <div className="border-2 h-fit rounded-xl border-gray-600 p-16 m-1 ml-4 mt-3 ">
          info
        </div>
      </div>
    </div>
  );
};

export default Board;
