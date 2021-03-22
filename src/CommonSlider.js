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
              <img src="img/work_content1.png"></img>
              <h2>Interactive Book</h2>
            </div>
          </div>
          <div>
            <div className="con3">
              <img src="img/work_content2.png" />
              <h2>Purge Limbo</h2>
            </div>
          </div>
          <div>
            <div className="con1">
              <iframe
                /*  width={"560"}
                height="315" */
                src="https://www.youtube.com/embed/SZqmtx2VtB4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2>ARpedia</h2>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
