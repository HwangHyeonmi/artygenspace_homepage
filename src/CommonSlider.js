import React, { Component } from "react";
import Slider from "react-slick";
/* import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css"; */

/* function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
} */

export default class CommonSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      /* nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />, */
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="con3">
              <img alt="arpedia" src="img/work/space_ar_00_01.png" />
              <img alt="arpedia" src="img/work/space_ar_00_02.png" />
              <h2>ARpedia</h2>
            </div>
          </div>
          <div>
            <div className="con1">
              <img alt="space_omni" src="img/work/space_omni_01.png" />
              <img alt="space_omni" src="img/work/space_omni_02.png" />
              <h2>Omni-Channel Intelligence</h2>
            </div>
          </div>
          <div>
            <div className="con4">
              <img alt="teching tools" src="img/work/space_tt_00_01.png" />
              <img alt="teching tools" src="img/work/space_tt_00_02.png" />
              <h2>Teaching Tools</h2>
            </div>
          </div>

          <div>
            <div className="con2">
              <img alt="purge limbo" src="img/work/space_Pl_01.png" />
              <img alt="purge limbo" src="img/work/space_Pl_02.png" />
              <h2>Purge Limbo</h2>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
