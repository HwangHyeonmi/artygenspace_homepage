import React from "react";
import Slider from "react-slick";
import { useState } from "react";

const SpecializeMobile = (props) => {
  const specializedTitleArray = ["AR", "Insight", "Quiz", "Learning", "Play"];
  const specializedContent = [
    `Augmented reality (AR) is an interactive experience that involves overlaying digital content onto the real-world environment. Using augmented reality, we provide an immersive and enjoyable experience with various learning tools like books..
  `,
    `We value the relationship between things and the environment in which they belong more than the inherent properties of an object.`,
    `Quizzes are the most effective way to measure one’s learning progress and can greatly help improve concentration.
    We provide customized quizzes based on artificial intelligence to maximize the learning effect of users.`,
    `As technology advances, the methods and scope of learning are also changing. We constantly strive to keep up with change and always consider the learning direction that users need.`,
    `For effective learning, the learner's voluntary motivation must be established. In this sense, immersive and fun play is the most effective tool for maximizing learning effects. We take this into account when creating our services.`,
  ];
  const [specializedCurrentIndex, setSpecializedCurrentIndex] = useState(0);
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
        <h2>{specializedTitleArray[specializedCurrentIndex]}</h2>
        <p className="explain">
          Augmented reality (AR) is an interactive experience of a real-world
          environment. <br />
          Based on Augmented Reality, We offer immersive and enjoyable
          experience with a variety of learning tools like books.
        </p>
      </div>
    </>
  );
};

export default SpecializeMobile;
