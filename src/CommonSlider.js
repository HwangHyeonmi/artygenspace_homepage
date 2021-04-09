import React, { Component } from "react";
import Slider from "react-slick";
/* import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css"; */

export default class CommonSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="con2">
              <img src="img/work/work_content1.png" />
              <h2>Omni-Channel Intelligence</h2>
            </div>
          </div>
          <div>
            <div className="con3">
              <img src="img/work/work_content2.png" />
              <h2>Purge Limbo</h2>
            </div>
          </div>
          <div>
            <div className="con3">
              <img src="img/work/work_content3.png" />
              <h2>ARpedia</h2>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
