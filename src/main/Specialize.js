import React from "react";
import { useEffect, useRef, useState } from "react";

const Specialize = (props) => {
  const picWrap = useRef();
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
    In this respect, immersive and exciting play is the best tool that maximizes the learning effect .<br>
    We put these aspects first and foremost when creating our services.`,
    `We value the relationship between things and things and the environment in which things belongs rather than the inherent properties of an object.`,

    `As technology advances, the way and scope of learning are also changing. <br>
    We constantly strive to catch changes and consider the direction of learning that users need.`,
  ];
  const [specializedCurrentIndex, setSpecializedCurrentIndex] = useState(0);
  const [clickVal, setClickVal] = useState(true);
  let [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const picWrapDiv = picWrap.current;
    var picDiv = picWrap.current.getElementsByTagName("div");
    var LastDiv = picDiv[picDiv.length - 1];
    var firstDiv = picDiv[0];
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

  useEffect(() => {
    /* console.log(p); */

    document.querySelector(".specialize div .explain").innerHTML =
      specializedContent[specializedCurrentIndex];
  }, [specializedCurrentIndex, specializedContent]);

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
  const settings2 = {
    afterChange: function (i) {
      document.querySelector(".specialize-mobile .explain").innerHTML =
        specializedContent[i];
      setSpecializedCurrentIndex(i);
    },
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <>
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
            <img alt="quiz" src="img/specialize/img_Quiz.png" />
          </div>
          <div>
            <img alt="AR" src="img/specialize/img_AR.png" />
          </div>
          <div>
            <img alt="play" src="img/specialize/img_Play.png" />
          </div>
          <div>
            <img alt="insight" src="img/specialize/img_Insight.png" />
          </div>
          <div>
            <img alt="learning" src="img/specialize/img_Learning.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialize;
