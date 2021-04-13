import React from "react";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import CommonSlider from "../CommonSlider";

const LatestWork = (props) => {
  const moreBtn = useRef();

  const [moreBtnClickVal, setMoreBtnClickVal] = useState(false);
  const settings3 = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };

  useEffect(() => {
    moreBtn.current.addEventListener("mouseenter", function () {
      setMoreBtnClickVal(true);
    });
    moreBtn.current.addEventListener("mouseleave", function () {
      setMoreBtnClickVal(false);
    });
  }, [moreBtnClickVal]);

  return (
    <>
      <h2>Our Impressive Work</h2>
      <p>
        From funded start-ups to large-scale enterprises, <br></br>we proudly
        partner with ambitious brands and organizations who impact the world
        around us.
      </p>
      <div className="content latest-work-pc">
        <div className="hover01 column latest-work-con">
          <Slider {...settings3}>
            <div className="figureWrap">
              <figure>
                <img src="img/work/space_ar_00_03.png" />
              </figure>
              <span>ARpedia</span>
            </div>
            <div className="figureWrap">
              <figure>
                <img src="img/work/space_omni_03.png" className="img1" />
              </figure>
              <span>Omni-Channel Intelligence</span>
            </div>
            <div className="figureWrap">
              <figure>
                <img src="img/work/space_tt_00_03.png" />
              </figure>
              <span>Teaching Tools</span>
            </div>
            <div className="figureWrap">
              <figure>
                <img src="img/work/space_Pl_03.png" />
              </figure>
              <span>Purge Limbo</span>
            </div>
          </Slider>
        </div>

        {/* <div className="con4">dd</div> */}
      </div>
      <div className="latest-work-mobile">
        <CommonSlider></CommonSlider>
      </div>
      <div
        className="moreBtn"
        ref={moreBtn}
        onClick={function () {
          setMoreBtnClickVal(true);
        }}
      >
        <div className="circle"></div>
        VIEW ALL WORK <img src="img/arrow.png" />
        {moreBtnClickVal && <span className="preparing"> Coming Soon! </span>}
      </div>
    </>
  );
};

export default LatestWork;
