import "./css/Common.css";
import "./css/Tablet.css";
import "./css/Mobile.css";

import Main from "./Main";
import { useEffect, useRef, useState } from "react";
import MainSlider from "./main/MainSlider";
import Header from "./main/Header";

function App() {
  const header = useRef();
  const [contactState, setContactState] = useState(false);
  const clickNav = () => {
    if (contactState === false) {
      setContactState(true);
    } else {
      setContactState(false);
    }
  };

  return (
    <div className="App">
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

      <div className="container" id="grid">
        <div className="headerWrap">
          <div className="header" ref={header}>
            {
              <Header
                header={header}
                contactState={contactState}
                clickNav={clickNav}
              ></Header>
            }
          </div>
          {!contactState && <MainSlider></MainSlider>}
        </div>
      </div>
      {!contactState && <Main></Main>}
    </div>
  );
}

export default App;
