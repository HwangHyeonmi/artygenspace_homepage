import React from "react";
import { setLanguage } from "../main/Header";
import NaverAPIMap from "../main/NaverAPIMap";
import { useRecoilValue } from "recoil";
const LocationMobile = (props) => {
  const lan = useRecoilValue(setLanguage);
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
              {lan.location.contents[0]}

              <br />
              {lan.location.contents[1]}
            </span>
          </div>
          <br />
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
