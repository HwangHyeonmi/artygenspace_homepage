import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

const MobileNav = ({ getContactVal }) => {
  const [hamburgerVal, setHamburgerVal] = useState(false);
  const menu = useRef();
  const mobileNav = useRef();
  const [navVisible, setNavVisible] = useState(false);

  const hamburgerClick = () => {
    const menuBtn = menu.current;
    const mobileNavDiv = mobileNav.current;

    if (hamburgerVal === true) {
      menuBtn.classList.add("opened");
      mobileNavDiv.classList.add("openNav");
      setNavVisible(true);
    } else {
      menuBtn.classList.remove("opened");
      mobileNavDiv.classList.remove("openNav");
      setNavVisible(false);
    }
  };
  useEffect(() => {
    hamburgerClick();
  }, [hamburgerVal]);

  return (
    <Grid container>
      <div ref={mobileNav} className="mobileNav">
        <button
          className="menu"
          ref={menu}
          onClick={function () {
            setHamburgerVal(!hamburgerVal);
          }}
          aria-label="Main Menu"
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        {navVisible && (
          <div>
            <div className="mobileNavBg">
              <div className="textWrap">
                <div
                  onClick={function () {
                    /* props.saveContactVal(true); */
                    getContactVal(true);
                  }}
                >
                  CONTACT
                </div>

                <div
                  onClick={function () {
                    /*  props.saveHamburgerVal(false);
                setHamburgerVal(false);
                props.saveLocationVal(true); */
                  }}
                >
                  <Link
                    color="secondary"
                    style={{
                      cursor: "pointer",
                    }}
                    to="/location"
                    /*  onClick={() => {}} */
                  >
                    LOCATION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Grid>
  );
};

export default MobileNav;
