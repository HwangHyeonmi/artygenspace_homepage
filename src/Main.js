import React, { useRef } from "react";
import Specialize from "./main/Specialize";
import SpecializeMobile from "./main/SpecializeMobile";
import LatestWork from "./main/LatestWork";
import NaverAPIMap from "./main/NaverAPIMap";
const Main = (props) => {
  const work = useRef();
  const about = useRef();

  return (
    <div className="container" id="grid">
      <div className="body">
        <div className="specialize specialize-pc" ref={about}>
          <Specialize></Specialize>
        </div>

        <div className="specialize-mobile" /* ref={about} */>
          <SpecializeMobile></SpecializeMobile>
        </div>

        <div className="latest-work " ref={work}>
          <LatestWork></LatestWork>
        </div>
        {/*  <div ref={contact} className="contact">
          <Contact></Contact>
        </div> */}
      </div>
      <div>
        <NaverAPIMap></NaverAPIMap>
      </div>
      <div className="footer footer-pc">
        <div className="grid">
          <span>Copyright © Artygen Space Company. All rights reserved.</span>
        </div>
      </div>
      <div className="footer footer-mobile">
        <div className="grid">
          <span>
            Copyright © Artygen Space Company.
            <br /> All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
