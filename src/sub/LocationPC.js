import React from "react";

const LocationPC = (props) => {
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
