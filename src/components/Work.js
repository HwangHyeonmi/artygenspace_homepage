import React, { useEffect, useRef } from "react";
import Box from "@material-ui/core/Box";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { setLanguage } from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Navigation, EffectFade } from "swiper/core";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([EffectFade, EffectFlip, Navigation, EffectFade]);

const useStyles = makeStyles((theme) => ({
  specialize: {
    flexGrow: 1,
    marginBottom: "150px",
    position: "relative",
  },
  imgWrap: {
    textAlign: "center",
  },
  textWrap: {
    paddingBottom: "150px !important",
    position: "relatvie",
  },
  button: {
    position: "absolute",
    bottom: 0,
  },
  marginBottom: {
    marginBottom: "30px",
  },
}));

const Work = ({ getPosition, screenMode }) => {
  const classes = useStyles();
  const workC = useRef();
  const lan = useRecoilValue(setLanguage);

  useEffect(() => {
    let position =
      window.pageYOffset + workC.current.getBoundingClientRect().top - 100;
    getPosition("work", position);
  }, []);

  return (
    <Box
      ref={workC}
      my={2}
      color="text.primary"
      className={`${classes.specialize} workWrap`}
    >
      <Grid container spacing={10} justifyContent="space-between">
        <Grid container item xs={12} className={classes.textWrap}>
          <Grid item xs={12}>
            <Typography className="subTitle" variant="h1" component="h2">
              Our impressive Work
            </Typography>
            <Typography
              className={classes.marginBottom}
              variant="h5"
              component="h2"
            >
              {lan.work.contents[0]} <br />
              {lan.work.contents[1]}
            </Typography>
            <Grid className={classes.imgWrap} item xs={12}>
              <Swiper
                className={`mySwiperMobile`}
                effect={"fade"}
                /*  grabCursor={true} */
                pagination={true}
                loop={true}
                onSlideChange={(swiper) => {}}
              >
                <SwiperSlide>
                  <div style={{ width: "100%" }}>
                    <img
                      style={{ width: "100%" }}
                      alt="arpedia"
                      src="img/work/space_ar_00_01.png"
                    />
                    <img
                      style={{ width: "100%" }}
                      alt="arpedia"
                      src="img/work/space_ar_00_02.png"
                    />
                    {/*      <span>ARpedia</span> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{ width: "100%" }}>
                    <img
                      style={{ width: "100%" }}
                      alt="space_omni"
                      src="img/work/space_omni_01.png"
                    />
                    <img
                      style={{ width: "100%" }}
                      alt="space_omni"
                      src="img/work/space_omni_02.png"
                    />
                    {/*        <h2>Omni-Channel Intelligence</h2> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{ width: "100%" }}>
                    <img
                      style={{ width: "100%" }}
                      alt="teching tools"
                      src="img/work/space_tt_00_01.png"
                    />
                    <img
                      style={{ width: "100%" }}
                      alt="teching tools"
                      src="img/work/space_tt_00_02.png"
                    />
                    {/*    <h2>Teaching Tools</h2> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={{ width: "100%" }}>
                    <img
                      style={{ width: "100%" }}
                      alt="purge limbo"
                      src="img/work/space_Pl_01.png"
                    />
                    <img
                      style={{ width: "100%" }}
                      alt="purge limbo"
                      src="img/work/space_Pl_02.png"
                    />
                    {/*        <h2>Purge Limbo</h2> */}
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                className={`mySwiperPC`}
                effect={"fade"}
                /*  grabCursor={true} */
                pagination={true}
                loop={true}
                onSlideChange={(swiper) => {}}
              >
                <SwiperSlide>
                  <img
                    style={{ width: "100%" }}
                    alt="work_1"
                    src="img/work/space_ar_00_03.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "100%" }}
                    alt="work_2"
                    src="img/work/space_omni_03.png"
                    className="img1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "100%" }}
                    alt="work_3"
                    src="img/work/space_tt_00_03.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "100%" }}
                    alt="work_4"
                    src="img/work/space_Pl_03.png"
                  />
                </SwiperSlide>
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Work;
