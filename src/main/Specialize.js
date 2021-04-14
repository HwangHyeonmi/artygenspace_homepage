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
  const [clickVal, setClickVal] = useState(true); //슬라이드 좌우버튼 클릭했는지 확인
  let [currentPosition, setCurrentPosition] = useState(0); //현 슬라이더의 위치

  useEffect(() => {
    //슬라이더 무한 루프를 위한 dom 동적 생성
    //마운트 되고 한번만 실행

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
    //슬라이더의 크기를 동적으로 계산함
    //윈도우 창 크기가 달라질 수 있기 때문
    //현재 리사이즈 될 때마다 달라지는 거 확인하기 위해 업데이트문 안에 넣어놓음.
    //리사이즈 될 때 업데이트 되게 바꿔야 함.

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
    //현재 index가 바뀔 때마다 본문 내용 바뀌게

    document.querySelector(".specialize div .explain").innerHTML =
      specializedContent[specializedCurrentIndex];
  }, [specializedCurrentIndex, specializedContent]);

  const specializeBtnClickEvent = (param) => {
    //좌우 버튼 클릭했을 때 실행될 함수
    const picWrapDiv = picWrap.current;
    var picDiv = picWrapDiv.getElementsByTagName("div");
    picWrapDiv.classList.add("slide");

    //clickval => 클릭하고 있는 동안 클릭이 안 되게 막는다.
    if (clickVal) {
      if (param === "right") {
        if (specializedCurrentIndex === 4) {
          setSpecializedCurrentIndex(0);
        } else {
          setSpecializedCurrentIndex(specializedCurrentIndex + 1);
        }
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
