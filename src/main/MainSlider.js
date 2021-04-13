import React from "react";
import Slider from "react-slick";
import { useEffect, useRef } from "react";

const MainSlider = (props) => {
  const video1 = useRef();
  const video2 = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    video1.current.muted = true;
    video2.current.muted = true;
    video1.current.play();
    video2.current.play();
  }, []);

  return (
    <div className="main-slider">
      <div className="ms-slider-pc">
        <Slider {...settings}>
          {/* <div className="sliderCon sliderCon1"></div> */}
          <div className="sliderCon2">
            <div className="embed-container ">
              <video
                ref={video1}
                /*  controls */
                autoPlay
                muted
                loop
                playsInline
                id="videoBg"
              >
                <source
                  src="media/mainSliderMovie.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </Slider>
      </div>
      <div className="ms-slider-mobile">
        <video
          ref={video2}
          /* controls */
          autoPlay
          muted
          loop
          playsInline
          id="videoBg"
        >
          <source
            src="media/mainSliderMovieMobile.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default MainSlider;
