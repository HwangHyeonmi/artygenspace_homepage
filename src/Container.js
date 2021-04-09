import React, { useEffect, useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import CommonSlider from "./CommonSlider";
import Slider from "react-slick";

const Container = (props) => {
  const work = useRef();
  const about = useRef();
  const contact = useRef();
  const header = useRef();
  const moreBtn = useRef();
  const picWrap = useRef();
  const logo = useRef();
  const [moreBtnClickVal, setMoreBtnClickVal] = useState(false);
  const [resize, setResize] = useState(true);
  /* we specialized in에 들어갈 문구들 */

  /*title  */
  const specializedTitleArray = ["Quiz", "AR", "Play", "Insight", "Learning"];
  const specializedContent = [
    `Quizzes are the most effective indicators of your learning status and are a great help in improving your concentration. <br> 
    We provide customized quizzes based on artificial intelligence to maximize the learning effect of users.`,
    `
    Augmented reality (AR) is an interactive experience of a real-world environment. <br>
    Based on Augmented Reality, We offer immersive and enjoyable experience with a variety of learning tools like books.
  `,

    `
    For effective learning, the learner's voluntary motivation must be premised.  <br>
    In this respect, there is no tool that maximizes the learning effect as immersive and exciting play.<br>
    We put these aspects first and foremost when creating our services.`,
    `We value the relationship between things and things and the environment in which things belongs,<br>
     rather than the inherent properties of an object.`,

    `As technology advances, the nature and scope of learning are also changing. <br>
    We constantly strive to catch changes and consider the direction of learning that users need.`,
  ];
  const [specializedCurrentIndex, setSpecializedCurrentIndex] = useState(0);

  let [currentPosition, setCurrentPosition] = useState(0);
  const [clickVal, setClickVal] = useState(true);
  /* specialize picWrap의 width를 가변적으로 */

  useEffect(() => {
    /* console.log(p); */

    document.querySelector(".specialize div .explain").innerHTML =
      specializedContent[specializedCurrentIndex];
  }, [specializedCurrentIndex]);

  useEffect(() => {
    const picWrapDiv = picWrap.current;
    console.log(picWrap.current.getElementsByTagName("div"));
    var picDiv = picWrap.current.getElementsByTagName("div");
    var LastDiv = picDiv[picDiv.length - 1];
    var firstDiv = picDiv[0];
    console.log(cloneLastDiv);
    var cloneLastDiv = LastDiv.cloneNode(true);
    var cloneFirstDiv = firstDiv.cloneNode(true);

    /* picWrap 마지막에 복사한 마지막 div를 추가한다 */
    picWrapDiv.appendChild(cloneFirstDiv);
    picWrapDiv.prepend(cloneLastDiv);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", function () {
      /*   setResize(!resize); */
    });
    const picWrapDiv = picWrap.current;
    var picDiv = picWrap.current.getElementsByTagName("div");

    picWrapDiv.style.left = "-" + picWrapDiv.parentNode.offsetWidth + "px";

    /* picWrapDiv의 초기 위치를 설정한다. */
    picWrapDiv.style.width = picWrapDiv.offsetWidth * picDiv.length + "px";
    for (let i = 0; i < picDiv.length; i++) {
      picDiv[i].style.width = picWrapDiv.parentNode.offsetWidth + "px";
    }
  });

  const specializeBtnClickEvent = (param) => {
    console.log("hi");

    var picDiv = picWrap.current.getElementsByTagName("div");

    const picWrapDiv = picWrap.current;

    picWrapDiv.classList.add("slide");

    if (clickVal) {
      if (param === "right") {
        if (specializedCurrentIndex === 4) {
          setSpecializedCurrentIndex(0);
          console.log(specializedCurrentIndex);
        } else {
          setSpecializedCurrentIndex(specializedCurrentIndex + 1);
        }

        console.log(specializedCurrentIndex);
        setCurrentPosition(
          (currentPosition -= picWrap.current.parentNode.offsetWidth)
        );
        document.querySelector(
          ".slide"
        ).style.transform = `translate(${currentPosition}px, 0)`;
      } else {
        if (specializedCurrentIndex === 0) {
          setSpecializedCurrentIndex(4);
        } else {
          setSpecializedCurrentIndex(specializedCurrentIndex - 1);
        }
        console.log(currentPosition);
        setCurrentPosition(
          (currentPosition += picWrap.current.parentNode.offsetWidth)
        );
        document.querySelector(
          ".slide"
        ).style.transform = `translate(${currentPosition}px, 0)`;
      }
      picWrapDiv.style.transition = `all 0.5s ease-in-out`;

      setTimeout(() => {
        if (
          document.querySelector(".slide").style.transform ===
          `translate(-${
            picWrap.current.parentNode.offsetWidth * (picDiv.length - 2)
          }px, 0px)`
        ) {
          document.querySelector(
            ".slide"
          ).style.transform = `translate(0px, 0px)`;
          picWrapDiv.style.transition = "none";
          setCurrentPosition(0);
        }

        if (
          document.querySelector(".slide").style.transform ===
          `translate(${picWrap.current.parentNode.offsetWidth}px, 0px)`
        ) {
          document.querySelector(".slide").style.transform = `translate(-${
            picWrap.current.parentNode.offsetWidth * (picDiv.length - 3)
          }px, 0px)`;
          picWrapDiv.style.transition = "none";

          setCurrentPosition(
            -picWrap.current.parentNode.offsetWidth * (picDiv.length - 3)
          );
        }
      }, 500);
      setClickVal(false);
      setTimeout(() => {
        setClickVal(true);
      }, 500);
    }
  };

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
  }, [moreBtnClickVal]);

  const moveToContentPosition = (work) => {
    let workPosition =
      window.pageYOffset + work.current.getBoundingClientRect().top - 100;
    window.scrollTo({ top: workPosition, behavior: "smooth" });

    if (work === logo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    afterChange: function (i) {
      setSpecializedCurrentIndex(i);
      document.querySelector(".specialize-mobile .explain").innerHTML =
        specializedContent[specializedCurrentIndex];
    },
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container" id="grid">
      <div className="headerWrap">
        <div className="header" ref={header}>
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
            <div
              className="logo"
              ref={logo}
              onClick={function () {
                moveToContentPosition(logo);
              }}
            >
              <img src="img/logo_blue.png"></img>
            </div>
          </div>
        </div>
        <div></div>
        <div className="main-slider">
          <div className="ms-slider-pc">
            <Slider {...settings}>
              <div className="sliderCon sliderCon1"></div>
              <div className="sliderCon2">
                <div className="embed-container ">
                  <iframe
                    type="text/html"
                    src="https://www.youtube.com/embed/SZqmtx2VtB4?rel=0&autoplay=1&loop=1&playlist=SZqmtx2VtB4&showinfo=0&modestbranding=0&disablekb=1&controls=0"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Slider>
          </div>
          <div className="ms-slider-mobile"></div>
        </div>

        {/* <div className="icon-scroll-p">
          <div className="icon-scroll"></div>
        </div> */}
      </div>
      <div className="body">
        <div className="specialize specialize-pc" ref={about}>
          <div>
            <p>We specialized in</p>
            <h2>
              {specializedTitleArray[specializedCurrentIndex]}
              {/*   <span> educational entertainment </span> */}
            </h2>
            <p className="explain"></p>
            <div className="btn">
              <span
                className="leftBtn"
                onClick={() => {
                  specializeBtnClickEvent("left");
                }}
              >
                left
              </span>{" "}
              |{" "}
              <span
                className="rightBtn"
                onClick={() => {
                  specializeBtnClickEvent("right");
                }}
              >
                next
              </span>
            </div>
          </div>
          <div className="pic">
            <div className="picWrap" ref={picWrap}>
              <div>
                <img src="img/specialize/img_Quiz.png" />
              </div>
              <div>
                <img src="img/specialize/img_AR.png" />
              </div>
              <div>
                <img src="img/specialize/img_Play.png" />
              </div>
              <div>
                <img src="img/specialize/img_Insight.png" />
              </div>
              <div>
                <img src="img/specialize/img_Learning.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="specialize-mobile" /* ref={about} */>
          <div className="pic">
            <Slider {...settings2}>
              <div>
                <img src="img/specialize/img_AR.png" />
              </div>

              <div>
                <img src="img/specialize/img_Insight.png" />
              </div>
              <div>
                <img src="img/specialize/img_Learning.png" />
              </div>
              <div>
                <img src="img/specialize/img_Play.png" />
              </div>
              <div>
                <img src="img/specialize/img_Quiz.png" />
              </div>
            </Slider>
          </div>

          <div>
            <h2>{specializedTitleArray[specializedCurrentIndex]}</h2>
            <p className="explain">
              Quizzes are the most effective indicators of your learning status
              and are a great help in improving your concentration. <br />
              We provide customized quizzes based on artificial intelligence to
              maximize the learning effect of users.
            </p>
          </div>
        </div>

        <div className="latest-work " ref={work}>
          <h2>Our Latest Work</h2>
          <p>
            From funded start-ups to large-scale enterprises, <br></br>we
            proudly partner with ambitious brands and organizations who impact
            the world around us.
          </p>
          <div className="content latest-work-pc">
            <div class="hover01 column latest-work-con">
              <div>
                <figure>
                  <img src="img/work/work_content2.png" />
                </figure>
                <span>Purge Limbo</span>
              </div>
              <div>
                <figure>
                  <img src="img/work/work_content2.png" />
                </figure>
                <span>Purge Limbo</span>
              </div>
              <div>
                <figure>
                  <img src="img/work/work_content2.png" />
                </figure>
                <span>Purge Limbo</span>
              </div>
              <div>
                <figure>
                  <img src="img/work/work_content2.png" />
                </figure>
                <span>Purge Limbo</span>
              </div>
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
      </div>
      <div className="contact" ref={contact}>
        <div className="grid">
          <span>Copyright © Artygen Space Company. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Container;
