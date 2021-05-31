import React from "react";

import { useRecoilValue } from "recoil";
import { setLanguage } from "../../ArtygenPage/header/Header";
import NaverAPIMap from "../../ArtygenPage/main/libarary/NaverAPIMap";
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
        </div>
      </div>
    </>
  );
};

export default LocationMobile;
