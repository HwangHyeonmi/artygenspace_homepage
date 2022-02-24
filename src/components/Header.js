import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import smoothscroll from "smoothscroll-polyfill";
import DropDown from "../ui/DropDown";
import { atom, selector, useRecoilState } from "recoil";
import { ENGLISH } from "../data/eng.js";
import { KOREAN } from "../data/kor.js";
import PcNav from "../ui/PcNav";
import MobileNav from "../ui/MobileNav";


let parseEng = JSON.parse(JSON.stringify(ENGLISH));
let parseKor = JSON.parse(JSON.stringify(KOREAN));

export let LanState = atom({
  key: "lanState",
  default: "Kor",
});

export const setLanguage = selector({
  key: "setLanState",
  get: ({ get }) => {
    let lan = get(LanState);
    if (lan === "Kor") {
      lan = parseKor;
    } else if (lan === "Eng") {
      lan = parseEng;
    }
    return lan;
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  box: {
    padding: "30px 30px",
    textAlign: "center",
  },
  cursor: {
    cursor: "pointer",
  },
}));

const Header = ({
  headerVal,
  sliderHeight,
  workPosition,
  specializePosition,
  contactPosition,
  mode,
  getContactVal,
  contactVal,
}) => {
  const classes = useStyles();
  const [headerVisible, setHeaderVisible] = useState(true);
  const [navColor, setNavColor] = useState("transparent");
  const [lan, setLan] = useRecoilState(LanState);

  useEffect(() => {
    setHeaderVisible(headerVal);
  }, [headerVisible]);

  //dropdown 값 받아오기

  const getLanVal = (val) => {
    setLan(val);
  };

  //add fixed header scroll event
  const navbarControl = () => {
    if (window.scrollY > sliderHeight) {
      setNavColor("#FFFFFF");
    } else {
      setNavColor("transparent");
    }
    // console.log(window.scrollY);
  };

  //네비버튼에 스크롤 이벤트 추가

  const moveToContentPosition = (where) => {
    if (where === "logo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (where === "work") {
      window.scrollTo({ top: workPosition, behavior: "smooth" });
    } else if (where === "specialize") {
      window.scrollTo({ top: specializePosition, behavior: "smooth" });
    } else if (where === "footer") {
      window.scrollTo({ top: contactPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    smoothscroll.polyfill();
    window.addEventListener("scroll", navbarControl);
    return () => {
      window.removeEventListener("scroll", navbarControl);
    };
  }, []);

  return (
    <div
      className="header"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "100",
        top: 0,
        left: 0,
        backgroundColor: navColor,
      }}
    >
      <Box my={2} color="text.primary" className={`${classes.box} headerWrap`}>
        <Grid container justifyContent="space-between">
          <Grid container item xs={3} className="pcNav">
            {headerVisible && (
              <PcNav
                getContactVal={getContactVal}
                moveToContentPosition={moveToContentPosition}
              ></PcNav>
            )}
          </Grid>
          <Grid container item xs={3} className="mobileNav">
            <MobileNav
              /*  className="mobileNav" */
              getContactVal={getContactVal}
              contactVal={contactVal}
            ></MobileNav>
          </Grid>

          <Grid className="logoWrapP" container item xs={3}>
            <Grid item xs={12}>
              <div className="lan">
                <DropDown
                  className="lan"
                  lan={lan}
                  getLanVal={getLanVal}
                ></DropDown>
              </div>
              {mode !== "home" && (
                <Link
                 to="/"
                  color="secondary"
                  onClick={(e) => {
                    //  e.preventDefault();
                    //moveToContentPosition("logo");
                  }}
                >
                  <span
                    className="logoArea"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <img alt="logo" src={"../img/logo_blue.png"}></img>
                  </span>
                </Link>
              )}

              {mode === "home" && (
                <span
                  className="logoArea"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    moveToContentPosition("logo");
                  }}
                >
                  <img alt="logo" src="img/logo_blue.png"></img>
                </span>
              )}
            </Grid>
          </Grid>

          <Grid className="logoWrapM" container item xs={5}>
            <div className="lan">
              <DropDown lan={lan} getLanVal={getLanVal}></DropDown>
            </div>
            {mode !== "home" && (
              <Link
                href="/"
                color="secondary"
                onClick={(e) => {
                  //  e.preventDefault();
                  //moveToContentPosition("logo");
                }}
              >
                <span
                  className="logoArea"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{ width: "100px" }}
                    alt="logo"
                    src="../img/logo_blue.png"
                  ></img>
                </span>
              </Link>
            )}
            {mode === "home" && (
              <span
                className="logoArea"
                style={{
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  moveToContentPosition("logo");
                }}
              >
                <img
                  alt="logo"
                  src="img/logo_blue.png"
                  style={{ width: "100px" }}
                ></img>
              </span>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Header;
