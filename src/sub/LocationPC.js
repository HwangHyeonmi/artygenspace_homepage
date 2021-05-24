import React from "react";
import { setLanguage } from "../main/Header";
import { useRecoilValue } from "recoil";
const LocationPC = (props) => {
  const lan = useRecoilValue(setLanguage);
  return (
    <div className="locationPC">
      <div className="map">
        <h2>Location</h2>
        <NaverAPIMap></NaverAPIMap>
      </div>
    </div>
  );
};

export default LocationPC;
