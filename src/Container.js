import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import ScrollTop from "react-scrolltop-button";
import CommonSlider from "./CommonSlider";

const Container = (props) => {
  const work = useRef();
  const about = useRef();
  const contact = useRef();
  const header = useRef();
  const moreBtn = useRef();
  const [moreBtnClickVal, setMoreBtnClickVal] = useState(false);

  useEffect(() => {
    console.log(work);
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
          console.log("dd");
          header.current.style.backgroundColor = "#fff";
          /* header.current.style.boxShadow = " 5px 3px 5px 5px #ccc"; */
        } else {
          header.current.style.backgroundColor = "transparent";
        }
      }
    });
  }, []);

  useEffect(() => {
    moreBtn.current.addEventListener("mouseenter", function () {
      setMoreBtnClickVal(true);
    });
    moreBtn.current.addEventListener("mouseleave", function () {
      setMoreBtnClickVal(false);
    });
    console.log(moreBtnClickVal);
  }, [moreBtnClickVal]);

  const moveToContentPosition = (work) => {
    let workPosition =
      window.pageYOffset + work.current.getBoundingClientRect().top - 100;
    console.log(workPosition);
    window.scrollTo({ top: workPosition, behavior: "smooth" });
  };

  return (
    <div className="container" id="grid">
      <div className="headerWrap">
        <div className="header" ref={header}>
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
              }}
            >
              Contacts
            </div>
          </div>
          <div class="hamburger">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <div className="logo">
            <img src="img/logo.png"></img>
          </div>
        </div>
        <div></div>
        <div className="main-slider">
          <div className="left">
            {/*  <h1>"We are all designers"</h1> */}
            <p></p>
          </div>
          <div className="right">
            {/*  <p>Artygen</p>
            <p>Space</p> */}
          </div>
          {/*   <div className="more">more+</div> */}
          {/* <div className="moreBtn">
            <div className="circle"></div>
            MORE <img src="img/arrow.png" />{" "}
          </div> */}
        </div>
        <div className="icon-scroll-p">
          <div className="icon-scroll"></div>
        </div>
      </div>
      <div className="body">
        <div className="latest-work " ref={work}>
          <h2>Our Latest Work</h2>
          <p>
            From funded start-ups to large-scale enterprises,
            <br /> we proudly partner with ambitious brands and organizations
            <br />
            who impact the world around us.
          </p>
          <div className="content latest-work-pc">
            <div className="con2">
              <img src="img/work_content1.png"></img>
              <h2>Interactive Book</h2>
            </div>
            <div className="con3">
              <img src="img/work_content2.png" />
              <h2>Purge Limbo</h2>
            </div>

            <div className="con1">
              <iframe
                /*  width={"560"}
                height="315" */
                src="https://www.youtube.com/embed/SZqmtx2VtB4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2>ARpedia</h2>
            </div>
            {/* <div className="con4">dd</div> */}
          </div>
          <div className="latest-work-mobile">
            <CommonSlider></CommonSlider>
          </div>
          <div
            className="moreBtn"
            ref={moreBtn}
            onClick={function () {
              setMoreBtnClickVal(true);
            }}
          >
            <div className="circle"></div>
            VIEW ALL WORK <img src="img/arrow.png" />
            {moreBtnClickVal && <span class="preparing"> Coming Soon! </span>}
          </div>
        </div>

        <div className="specialize specialize-pc" ref={about}>
          <div>
            <p>We specialized in</p>
            <h2>
              AR <span> educational entertainment </span>{" "}
            </h2>
            <p>
              Augmented reality (AR) is an interactive experience of a
              real-world environment. <br />
              Based on Augmented Reality, We offer immersive and enjoyable
              experience with a variety of learning tools like books.
            </p>
            <div className="btn">
              <span className="bar"></span>
              <span className="bar"></span>
              <span>left</span> | <span>next</span>
            </div>
          </div>
          <div className="pic">
            <img src="img/specialize_3 .png" />
          </div>
        </div>
        <div className="specialize-mobile" /* ref={about} */>
          <div className="pic">
            <img src="img/specialize_3 .png" />
          </div>
          <div>
            <h2>
              AR <span> educational entertainment </span>{" "}
            </h2>
            <p>
              Augmented reality (AR) is an interactive experience of a
              real-world environment. <br />
              Based on Augmented Reality, We offer immersive and enjoyable
              experience with a variety of learning tools like books.
            </p>
            <div className="btn">
              <span className="bar"></span>
              <span className="bar"></span>
              <span>left</span> | <span>next</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact" ref={contact}>
        <div className="grid">
          <span>Copyright © Artygen Space Company. All rights reserved.</span>

          {/*  <div>
            <span>brownrice@artygen.com</span>
             <i class="fa fa-envelope"> </i>
          </div> */}
          {/*  <div>
            <a>
              <i class="fa fa-envelope">
                <span>brownrice@artygen.com</span>
              </i>
            </a>
          </div> */}
          {/*   <div>8, Teheran-ro 43-gil, Gangnam-gu, Seoul, Republic of Korea</div> */}
        </div>
      </div>
      {/* <div className="copyright"></div> */}
      {/*  <ScrollTop
        text="↑"
        distance={100}
        breakpoint={768}
          style={{ border: "1px solid #de211b" }}
        className="scroll-your-role"
        speed={1000}
        target={75}
      /> */}
    </div>
  );
};

export default Container;
