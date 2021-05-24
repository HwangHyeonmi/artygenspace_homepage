import "./css/Common.css";
import "./css/Tablet.css";
import "./css/Mobile.css";

import Main from "./Main";
import React, { useEffect, useRef, useState } from "react";
import MainSlider from "./main/MainSlider";
import Header from "./main/Header";
import Contact from "./main/Contact";
import LocationMobile from "./sub/LocationMobile";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanState, setLanguage } from "./main/Header";
import { useRecoilValue } from "recoil";

function App() {
  const header = useRef();
  const [contactState, setContactState] = useState(false);
  const [mainVal, setMainVal] = useState(true);
  const app = useRef();
  const lan = useRecoilValue(setLanguage);

  useEffect(() => {}, [lan]);
  const saveMainVal = (val) => {
    setMainVal(val);
  };

  const clickNav = () => {
    if (contactState === false) {
      setContactState(true);
      enable();
    } else {
      setContactState(false);
      disable();
    }
  };
  const [hamburgerVal, setHamburgerVal] = useState(false);

  const saveHamburgerVal = (val) => {
    setHamburgerVal(val);
  };

  const saveContactVal = (val) => {
    if (contactState === false) {
      setContactState(true);
      enable();
    } else {
      setContactState(false);
      disable();
    }
  };

  const [locationVal, setLocationVal] = useState(false);

  const saveLocationVal = (val) => {
    setLocationVal(val);
    if (val === true) {
      window.scrollTo({ top: 0, behavior: "instant" });
      setMainVal(false);
    } else {
      setMainVal(true);
    }
  };

  const body = document.querySelector("body");

  function enable() {
    body.style.overflow = "hidden";
    body.style.height = "100%";
    body.style.position = "fixed";
  }
  function disable() {
    body.style.removeProperty("overflow");
    body.style.removeProperty("height");
    body.style.removeProperty("position");
  }

  return (
    <div className="App" ref={app}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>작업중입니다.^^</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ★Artygen Space★
        </a>
      </header> */}

      <div className="container2" id="grid">
        <div className="headerWrap">
          <div className="header" ref={header}>
            <Header
              app={app}
              header={header}
              contactState={contactState}
              clickNav={clickNav}
              saveHamburgerVal={saveHamburgerVal}
              hamburgerVal={hamburgerVal}
              saveContactVal={saveContactVal}
              saveLocationVal={saveLocationVal}
              saveMainVal={saveMainVal}
              locationVal={locationVal}
            ></Header>
          </div>
          {mainVal && <MainSlider></MainSlider>}
        </div>
      </div>
      {mainVal && <Main></Main>}

      {contactState && (
        <div className="contactP">
          <div className="contact">
            <Contact contactState={contactState} clickNav={clickNav}></Contact>
          </div>
          <div className="contactBg"></div>
          <div className="contactBg2"></div>
        </div>
      )}

      {contactState && (
        <div className="mobileSubWrap">
          <div className="contactP">
            <div className="contact">
              <Contact
                contactState={contactState}
                clickNav={clickNav}
              ></Contact>
            </div>
            <div className="contactBg"></div>
            <div className="contactBg2"></div>
          </div>
        </div>
      )}

      {locationVal && <LocationMobile></LocationMobile>}
    </div>
  );
}

export default App;
