import React from "react";
import NaverAPIMap from "../main/NaverAPIMap";

const LocationMobile = (props) => {
  return (
    <>
      <div className="locationMobile">
        <div className="map">
          <h2>Location</h2>
          <NaverAPIMap></NaverAPIMap>
        </div>
      </div>
      {/*  <div className="locationPC">
        <div className="map">
          <h2>Location</h2>
          <NaverAPIMap></NaverAPIMap>
        </div>
      </div> */}
    </>
  );
};

export default LocationMobile;
