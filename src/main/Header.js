import React, { useEffect, useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
const Header = (props) => {
  const [work, setWork] = useState();
  const [about, setAbout] = useState();
  const [contact, setContact] = useState();
  const [mainNavVal, setMainNavVal] = useState(true);
  const header = props.header;
  useEffect(() => {
    setWork(document.querySelector(".latest-work"));
    setAbout(document.querySelector(".specialize-pc"));
  }, []);

  useEffect(() => {
    smoothscroll.polyfill();
    window.addEventListener("scroll", function () {
      if (window.scrollY > 1000) {
        header.current.style.backgroundColor = "#fff";
        /* header.current.style.boxShadow = " 5px 3px 5px 5px #ccc"; */
      } else {
        header.current.style.backgroundColor = "transparent";
      }
    });

    window.addEventListener("scroll", function () {
      if (window.innerWidth < 767) {
        if (window.scrollY > 720) {
          header.current.style.backgroundColor = "#fff";
          /* header.current.style.boxShadow = " 5px 3px 5px 5px #ccc"; */
        } else {
          header.current.style.backgroundColor = "transparent";
        }
      }
    });
  }, []);

  const moveToContentPosition = (work) => {
    if (work === "logo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      let workPosition =
        window.pageYOffset + work.getBoundingClientRect().top - 100;
      window.scrollTo({ top: workPosition, behavior: "smooth" });
    }
  };

  const [hamburgerVal, setHamburgerVal] = useState(false);

  const hamburgerClick = () => {
    const body = document.querySelector("body");
    const menu = document.querySelector(".menu");

    /*   document.querySelector(".menu").setAttribute("aria-expanded"); */
    if (hamburgerVal === true) {
      menu.classList.add("opened");
      document.querySelector(".mobileNav").style.display = "block";

      document.querySelector(".logo").style.display = "none";

      body.style.position = "fixed";
      props.saveHamburgerVal(true);

      props.saveLocationVal(false);
    } else {
      menu.classList.remove("opened");
      document.querySelector(".mobileNav").style.display = "none";

      document.querySelector(".logo").style.display = "block";

      body.style.removeProperty("position");
      /*  props.saveLocationVal(true); */
    }
  };
  /*  useEffect(() => {
    const menu = document.querySelector(".menu");
    menu.classList.add("opened");
  }, []); */
  useEffect(() => {
    hamburgerClick();
  }, [hamburgerVal]);

  return (
    <div className="navWrap">
      {mainNavVal && (
        <div className="mainNav pcNav">
          <div
            onClick={function () {
              console.log(work);
              if (work) {
                moveToContentPosition(work);
              }
            }}
          >
            Work
          </div>
          <div
            onClick={function () {
              if (about) {
                moveToContentPosition(about);
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
                alert("Coming Soon!");
              }}
            >
              WORK
            </div>
            <div
              onClick={function () {
                alert("Coming Soon!");
              }}
            >
              ABOUT
            </div>
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

      <div
        className="logo"
        onClick={function () {
          moveToContentPosition("logo");
          props.saveMainVal(true);
          setMainNavVal(true);
        }}
      >
        <img alt="logo" src="img/logo_blue.png"></img>
      </div>
    </div>
  );
};

export default Header;
