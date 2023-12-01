import React from "react";
import SettingBox from "../Components/SettingBox";

const SettingBoxes = () => {
  return (
    <div className="flex flex-col justify-center items-center place-content-center">
      <div className="flex gap-20 justify-center items-center place-content-center">
        <div className="flex flex-col gap-10 ">
          <SettingBox />
          <SettingBox />
          <SettingBox />
        </div>
        <div className="flex flex-col gap-10">
          <SettingBox />
          <SettingBox />
          <SettingBox />
        </div>
        <div className="flex flex-col gap-10">
          <SettingBox />
          <SettingBox />
          <SettingBox />
        </div>
        <div className="flex flex-col gap-10">
          <SettingBox />
          <SettingBox />
          <SettingBox />
        </div>
      </div>
    </div>
  );
};

export default SettingBoxes;
