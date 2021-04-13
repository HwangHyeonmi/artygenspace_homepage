import React, { useEffect, useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import CommonSlider from "./CommonSlider";
import Slider from "react-slick";
import Header from "./main/Header";
import MainSlider from "./main/MainSlider";
import Specialize from "./main/Specialize";
import SpecializeMobile from "./main/SpecializeMobile";
import LatestWork from "./main/LatestWork";
const Main = (props) => {
  const work = useRef();
  const about = useRef();
  const contact = useRef();
  const header = useRef();

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
        window.pageYOffset + work.current.getBoundingClientRect().top - 100;
      window.scrollTo({ top: workPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="container" id="grid">
      <div className="headerWrap">
        <div className="header" ref={header}>
          <Header
            header={header}
            work={work}
            contact={contact}
            about={about}
            moveToContentPosition={moveToContentPosition}
          ></Header>
        </div>
        <MainSlider></MainSlider>
      </div>
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
      </div>
      <div className="contact contact-pc" ref={contact}>
        <div className="grid">
          <span>Copyright © Artygen Space Company. All rights reserved.</span>
        </div>
      </div>
      <div className="contact contact-mobile">
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
