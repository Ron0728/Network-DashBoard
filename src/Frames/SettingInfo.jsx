import React from "react";
import { useNavigate } from "react-router-dom";
const SettingInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      settingInfo
      <div className=" bg-slate-300 ">
        <button onClick={() => navigate("/setting")}>Back</button>
      </div>
    </div>
  );
};

export default SettingInfo;
