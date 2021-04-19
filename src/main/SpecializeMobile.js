import React from "react";
import Slider from "react-slick";
import { useState } from "react";

const SpecializeMobile = (props) => {
  const specializedTitleArray = ["AR", "Insight", "Quiz", "Learning", "Play"];
  const specializedContent = [
    `
    Augmented reality (AR) is an interactive experience of a real-world environment. <br>
    Based on Augmented Reality, We offer immersive and enjoyable experience with a variety of learning tools like books.
  `,
    `We value the relationship between things and things and the environment in which things belongs rather than the inherent properties of an object.`,
    `Quizzes are the most effective indicators of your learning status and are a great help in improving your concentration. <br> 
    We provide customized quizzes based on artificial intelligence to maximize the learning effect of users.`,
    `As technology advances, the way and scope of learning are also changing. <br>
    We constantly strive to catch changes and consider the direction of learning that users need.`,
    `
    For effective learning, the learner's voluntary motivation must be premised.  <br>
    In this respect, immersive and exciting play is the best tool that maximizes the learning effect .<br>
    We put these aspects first and foremost when creating our services.`,
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
            <img alt="quiz" src="img/specialize/img_Quiz.png" />
          </div>

          <div>
            <img alt="AR" src="img/specialize/img_AR.png" />
          </div>
          <div>
            <img alt="Play" src="img/specialize/img_Play.png" />
          </div>
          <div>
            <img alt="Insight" src="img/specialize/img_Insight.png" />
          </div>
          <div>
            <img alt="Learning" src="img/specialize/img_Learning.png" />
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
