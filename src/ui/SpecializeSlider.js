import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import Box from "@material-ui/core/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

// Import Swiper styles
import "swiper/swiper.min.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectFlip,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectFlip, Pagination, Navigation, EffectFade]);
const useStyles = makeStyles((theme) => ({
  specialize: {
    flexGrow: 1,
    marginBottom: "150px",
    position: "relative",
  },
  imgWrap: {
    textAlign: "center",
    marginTop: "60px",
  },
  textWrap: {
    paddingBottom: "150px !important",
    position: "relatvie",
    fontWeight: "900 !important",
  },
  buttonWrap: {
    position: "absolute",
    bottom: "20px",
  },
  button: {
    marginRight: "50px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  textWrapM: {
    paddingTop: "0 !important",
  },
}));
const SpecializeSlider = ({ lan, screenMode }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const classes = useStyles();
  const [slideInit, setSlideInit] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <Grid
        className="specializePC"
        container
        spacing={10}
        justifyContent="space-between"
      >
        <Grid container item xs={6} className={classes.textWrap}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.marginBottom}
            >
              We specialized in
            </Typography>
            <Typography
              className={`subTitle ${classes.marginBottom}`}
              variant="h1"
              component="h2"
            >
              {lan.specialize.subTitles[currentIndex]}
            </Typography>
            <Typography variant="h5" component="h2">
              {lan.specialize.contents[currentIndex]}
            </Typography>
            <div className={`${classes.buttonWrap} buttonWrap`}>
              <span
                style={{ cursor: "pointer" }}
                className={`${classes.button} leftBtn`}
                ref={prevRef}
              >
                LEFT
              </span>
              <span
                className={`${classes.button} rightBtn`}
                style={{ cursor: "pointer" }}
                ref={nextRef}
              >
                RIGHT
              </span>
            </div>
            <Box className={classes.button}></Box>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Grid className={classes.imgWrap} item xs={12}>
            <Swiper
              className="mySwiper"
              effect={"flip"}
              /*  grabCursor={true} */
              /*    pagination={true} */

              loop={true}
              navigation={{
                // Both prevEl & nextEl are null at render so this does not work
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              onSlideChange={(swiper) => {
                if (slideInit) {
                  setCurrentIndex(swiper.realIndex);
                }
                setSlideInit(true);
              }}
            >
              <SwiperSlide>
                <img
                  style={{ position: "relative", top: "15%" }}
                  alt="AR"
                  src="img/specialize/img_AR.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="insight" src="img/specialize/img_Insight.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="quiz" src="img/specialize/img_Quiz.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="learning" src="img/specialize/img_Learning.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="play" src="img/specialize/img_Play.png" />
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        className="specializeMobile"
        container
        spacing={10}
        justifyContent="space-between"
      >
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            We specialized in
          </Typography>
          <Box className={classes.button}></Box>
        </Grid>
        <Grid className={`${classes.imgWrap} imgWrap`} item xs={12}>
          <Swiper
            className="mySwiper"
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            loop={true}
            /*  navigation={true} */
            onSlideChange={(swiper) => {
              if (slideInit) {
                setCurrentIndex(swiper.realIndex);
              }
              setSlideInit(true);
            }}
          >
            <SwiperSlide>
              <img
                style={{ position: "relative", top: "15%" }}
                alt="AR"
                src="img/specialize/img_AR.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="insight" src="img/specialize/img_Insight.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="quiz" src="img/specialize/img_Quiz.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="learning" src="img/specialize/img_Learning.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="play" src="img/specialize/img_Play.png" />
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item xs={12} className={classes.textWrapM}>
          <Typography className="subTitle" variant="h1" component="h2">
            {lan.specialize.subTitles[currentIndex]}
          </Typography>
          <Typography variant="h5" component="h2">
            {lan.specialize.contents[currentIndex]}
          </Typography>
          <br />
          <br />

          <hr />
        </Grid>
      </Grid>
    </>
  );
};

export default SpecializeSlider;
