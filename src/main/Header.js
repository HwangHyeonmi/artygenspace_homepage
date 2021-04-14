import React, { useEffect, useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
const Header = (props) => {
  let work;
  let about;
  let contact;
  const header = props.header;
  useEffect(() => {
    work = document.querySelector(".latest-work");
    about = document.querySelector(".specialize-pc");
    contact = document.querySelector(".contact");
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
    console.log(work);
    if (work === "logo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      let workPosition =
        window.pageYOffset + work.getBoundingClientRect().top - 100;
      window.scrollTo({ top: workPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="navWrap">
      <div className="mainNav pcNav">
        <div
          onClick={function () {
            moveToContentPosition(work);
          }}
        >
          Work
        </div>
        <div
          onClick={function () {
            moveToContentPosition(about);
          }}
        >
          About
        </div>
        <div
          onClick={function () {
            moveToContentPosition(contact);
            /*     props.clickNav(); */
          }}
        >
          Contacts
        </div>
      </div>
      <div className="hamburger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div
        className="logo"
        onClick={function () {
          moveToContentPosition("logo");
        }}
      >
        <img alt="logo" src="img/logo_blue.png"></img>
      </div>
    </div>
  );
};

export default Header;
