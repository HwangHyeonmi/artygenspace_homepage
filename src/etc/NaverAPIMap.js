import React, { useEffect } from "react";

import GoogleMapReact from "google-map-react";

//https://www.npmjs.com/package//google-map-react

export const NaverAPIMap = (props) => {
  const center = {
    lat: 37.50375002259543,
    lng: 127.04431355594738,
  };
  const zoom = 11;

  const MapMarker = ({ text }) => (
    <div className="mapMarker">
      <div className="pin2"></div>
      <div className="pulse"></div>
    </div>
  );
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBc2oN2LJaSnM8ZqR3LyWeFkpikHnN6k_M" }}
          defaultCenter={center}
          defaultZoom={zoom}
          zoom={16}
        >
          <MapMarker
            lat={37.50375002259543}
            lng={127.04431355594738}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default NaverAPIMap;
