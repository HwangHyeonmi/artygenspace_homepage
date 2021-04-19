import React from "react";
import NaverAPIMap from "../main/NaverAPIMap";

const LocationMobile = (props) => {
  return (
    <>
      <div className="locationMobile">
        <h2 className="title">Location</h2>
        <div className="map">
          <NaverAPIMap></NaverAPIMap>
        </div>
        <div className="grayline"></div>
        <div className="info">
          <div>
            <span className="bold">address</span>
            <span>
              8, Teheran-ro 43-gil, Gangnam-gu, Seoul, Republic of Korea
            </span>
          </div>
          <div>
            <span className="bold">e-mail</span>
            <span>contact@artygenspace.com</span>
          </div>
          {/*  <div>
            <span className="bold">phone</span>
            <span>000-0000-0000</span>
          </div> */}
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
