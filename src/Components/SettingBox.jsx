import React from "react";
import { useNavigate } from "react-router-dom";

const SettingBox = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-center items-center p-16
     rounded-2xl bg-slate-700 hover:text-white cursor-pointer border-2 "
      onClick={() => navigate("settinginfo")}
    >
      info
    </div>
  );
};

export default SettingBox;
