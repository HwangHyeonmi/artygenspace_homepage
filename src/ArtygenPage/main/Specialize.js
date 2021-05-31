import React from "react";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { setLanguage } from "../header/Header";

const Specialize = (props) => {
  const lan = useRecoilValue(setLanguage);
  const picWrap = useRef();

  const [specializedCurrentIndex, setSpecializedCurrentIndex] = useState(0);
  const [clickVal, setClickVal] = useState(true); //슬라이드 좌우버튼 클릭했는지 확인
  let [currentPosition, setCurrentPosition] = useState(0); //현 슬라이더의 위치
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

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
    //리사이즈 될 때마다 실행되는 함수
    //계속 div 크기 계산해주면서 다시 그려야돼서

    const picWrapDiv = picWrap.current;
    if (picWrapDiv.offsetWidth === 0) {
      picWrapDiv.style.width = "auto";
      //모바일 환경에서 사라졌다가 다시 생성되면 width값이 자동으로 0이 돼서 auto로 다시 바꿔줌
    }
    var picDiv = picWrap.current.getElementsByTagName("div");
    picWrapDiv.style.left = "-" + picWrapDiv.parentNode.offsetWidth + "px";

    /* picWrapDiv의 초기 위치를 설정한다. */
    picWrapDiv.style.width = picWrapDiv.offsetWidth * picDiv.length + "px";
    for (let i = 0; i < picDiv.length; i++) {
      picDiv[i].style.width = picWrapDiv.parentNode.offsetWidth + "px";
    }
  }, [windowSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    //현재 index가 바뀔 때마다 본문 내용 바뀌게

    document.querySelector(".specialize div .explain").innerHTML =
      lan.specialize.contents[specializedCurrentIndex];
  }, [specializedCurrentIndex, lan]);

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
          {lan.specialize.subTitles[specializedCurrentIndex]}
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
            <img alt="AR" src="img/specialize/img_AR.png" />
          </div>
          <div>
            <img alt="insight" src="img/specialize/img_Insight.png" />
          </div>
          <div>
            <img alt="quiz" src="img/specialize/img_Quiz.png" />
          </div>
          <div>
            <img alt="learning" src="img/specialize/img_Learning.png" />
          </div>
          <div>
            <img alt="play" src="img/specialize/img_Play.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialize;
