import React, { useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { Dropdown } from "react-bootstrap";
import { atom, selector, useRecoilState } from "recoil";
import { ENGLISH } from "../../data/eng.js";
import { KOREAN } from "../../data/kor.js";

let parseEng = JSON.parse(JSON.stringify(ENGLISH));
let parseKor = JSON.parse(JSON.stringify(KOREAN));

export let LanState = atom({
  key: "lanState",
  default: "Eng",
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

const Header = (props) => {
  const [work, setWork] = useState();
  const [about, setAbout] = useState();
  const [workPosition, setWorkPosition] = useState();
  const [aboutPosition, setAboutPosition] = useState();
  const [mainNavVal, setMainNavVal] = useState(true);
  const [lan, setLan] = useRecoilState(LanState);
  const [hamburgerVal, setHamburgerVal] = useState(false);
  const header = props.header;
  const locationVal = props.locationVal;

  useEffect(() => {
    setWork(document.querySelector(".latest-work"));
    setAbout(document.querySelector(".specialize-pc"));
    setWorkPosition(
      window.pageYOffset +
        document.querySelector(".latest-work").getBoundingClientRect().top -
        100
    );
    setAboutPosition(
      window.pageYOffset +
        document.querySelector(".specialize-pc").getBoundingClientRect().top -
        100
    );
  }, []);

  useEffect(() => {
    smoothscroll.polyfill();
    window.addEventListener("scroll", scrollEvent, true);
  }, [locationVal]);

  useEffect(() => {
    hamburgerClick();
  }, [hamburgerVal]);

  const scrollEvent = () => {
    if (window.innerWidth < 767) {
      if (locationVal) {
      } else {
        if (window.scrollY > 720) {
          header.current.style.backgroundColor = "#fff";
        } else {
          header.current.style.backgroundColor = "transparent";
        }
      }
    } else {
      if (locationVal) {
      } else {
        if (window.scrollY > 1000) {
          header.current.style.backgroundColor = "#fff";
        } else {
          header.current.style.backgroundColor = "transparent";
        }
      }
    }
  };

  const moveToContentPosition = (work, position) => {
    console.log(work);

    if (work === "logo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      let workPosition = position;
      window.scrollTo({ top: workPosition, behavior: "smooth" });
      console.log("else", workPosition);
    }
  };

  const hamburgerClick = () => {
    document.querySelector("body").scrollTo({ top: 0, behavior: "smooth" });
    const body = document.querySelector("body");
    const menu = document.querySelector(".menu");

    if (hamburgerVal === true) {
      menu.classList.add("opened");
      document.querySelector(".mobileNav").style.display = "block";
      document.querySelector(".headerRightWrap").style.display = "none";
      body.style.position = "fixed";
      props.saveHamburgerVal(true);
      props.saveLocationVal(false);
    } else {
      menu.classList.remove("opened");
      document.querySelector(".mobileNav").style.display = "none";
      document.querySelector(".headerRightWrap").style.display = "block";
      body.style.removeProperty("position");
    }
  };

  return (
    <div className="navWrap">
      {mainNavVal && (
        <div className="mainNav pcNav">
          <div
            onClick={function () {
              if (work) {
                moveToContentPosition(work, workPosition);
              }
            }}
          >
            Work
          </div>
          <div
            onClick={function () {
              if (about) {
                moveToContentPosition(about, aboutPosition);
              }
            }}
          >
            About
          </div>
          <div
            onClick={function () {
              /*  moveToContentPosition(contact); */
              props.clickNav();
            }}
          >
            Contacts
          </div>
          <div
            onClick={function () {
              props.saveLocationVal(true);
              setMainNavVal(false);
            }}
          >
            Location
          </div>
        </div>
      )}
      <button
        className="menu"
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

      <div className="mobileNav">
        <div className="mobileNavBg">
          <div className="textWrap">
            <div
              onClick={function () {
                props.saveContactVal(true);
              }}
            >
              CONTACT
            </div>
            <div
              onClick={function () {
                props.saveHamburgerVal(false);
                setHamburgerVal(false);
                props.saveLocationVal(true);
              }}
            >
              LOCATION
            </div>
          </div>
        </div>
      </div>
      <div className="headerRightWrap">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {lan}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={function () {
                setLan("Kor");
              }}
              href="#"
            >
              Kor
            </Dropdown.Item>
            <Dropdown.Item
              onClick={function () {
                setLan("Eng");
              }}
              href="#"
            >
              Eng
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div
          className="logo"
          onClick={function () {
            moveToContentPosition("logo");
            props.saveMainVal(true);
            setMainNavVal(true);
            props.saveLocationVal(false);
          }}
        >
          <img alt="logo" src="img/logo_blue.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
