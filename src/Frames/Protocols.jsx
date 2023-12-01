import React from "react";

const Protocols = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-24 m-5">
        <h1 className="font-bold">
          The Network You Are Managing is working with NAME Protocol
        </h1>
        <span>
          You Can View The Effacts of This Protocol on the Network with the
          Diagram
        </span>
        <div>
          <div className="font-bold">Try Another Protocols</div>
          <input className="h-16 w-64 outline-none rounded-sm p-2" />
          <button className=" bg-slate-400 p-5 rounded-xl font-bold ml-4">
            Try
          </button>
        </div>
      </div>
      <div className="bg-white w-1/2 border-4 border-black m-2"></div>
    </div>
  );
};

export default Protocols;
