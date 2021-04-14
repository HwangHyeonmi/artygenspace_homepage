import React from "react";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

const LatestWork = (props) => {
  const moreBtn = useRef();

  const [moreBtnClickVal, setMoreBtnClickVal] = useState(false);
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };

  const settings2 = {
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
      <div className="mobile-line"></div>
      <h2>Our impressive work</h2>
      <p>
        From funded start-ups to large-scale enterprises, <br></br>we proudly
        partner with ambitious brands and organizations who impact the world
        around us.
      </p>
      <div className="content latest-work-pc">
        <div className="hover01 column latest-work-con">
          <Slider {...settings}>
            <div className="figureWrap">
              <figure>
                <img alt="work_1" src="img/work/space_ar_00_03.png" />
              </figure>
              <span>ARpedia</span>
            </div>
            <div className="figureWrap">
              <figure>
                <img
                  alt="work_2"
                  src="img/work/space_omni_03.png"
                  className="img1"
                />
              </figure>
              <span>Omni-Channel Intelligence</span>
            </div>
            <div className="figureWrap">
              <figure>
                <img alt="work_3" src="img/work/space_tt_00_03.png" />
              </figure>
              <span>Teaching Tools</span>
            </div>
            <div className="figureWrap">
              <figure>
                <img alt="work_4" src="img/work/space_Pl_03.png" />
              </figure>
              <span>Purge Limbo</span>
            </div>
          </Slider>
        </div>

        {/* <div className="con4">dd</div> */}
      </div>

      <div className="latest-work-mobile">
        <div>
          <Slider {...settings2}>
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
      </div>
      <div
        className="moreBtn"
        ref={moreBtn}
        onClick={function () {
          setMoreBtnClickVal(true);
        }}
      >
        <div className="circle"></div>
        VIEW ALL WORK <img alt="arrow" src="img/arrow.png" />
        {moreBtnClickVal && <span className="preparing"> Coming Soon! </span>}
      </div>
    </>
  );
};

export default LatestWork;
