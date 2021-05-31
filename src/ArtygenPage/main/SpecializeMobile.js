import React from "react";
import Slider from "react-slick";
import { useState } from "react";

import { useRecoilValue } from "recoil";
import { setLanguage } from "../header/Header";

const SpecializeMobile = (props) => {
  const lan = useRecoilValue(setLanguage);
  const [specializedCurrentIndex, setSpecializedCurrentIndex] = useState(0);
  const settings2 = {
    afterChange: function (i) {
      document.querySelector(".specialize-mobile .explain").innerHTML =
        lan.specialize.contents[specializedCurrentIndex];
      setSpecializedCurrentIndex(i);
    },
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <>
      <p className="specializedTitle">We specialized in</p>
      <div className="pic">
        <Slider {...settings2}>
          <div>
            <img alt="AR" src="img/specialize/img_AR.png" />
          </div>
          <div>
            <img alt="Insight" src="img/specialize/img_Insight.png" />
          </div>
          <div>
            <img alt="quiz" src="img/specialize/img_Quiz.png" />
          </div>
          <div>
            <img alt="Learning" src="img/specialize/img_Learning.png" />
          </div>
          <div>
            <img alt="Play" src="img/specialize/img_Play.png" />
          </div>
        </Slider>
      </div>

      <div>
        <h2>{lan.specialize.subTitles[specializedCurrentIndex]}</h2>
        <p className="explain">
          {lan.specialize.contents[specializedCurrentIndex]}
        </p>
      </div>
    </>
  );
};

export default SpecializeMobile;
