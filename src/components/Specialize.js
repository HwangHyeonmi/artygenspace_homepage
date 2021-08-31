import React, { useEffect, useRef } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import SpecializeSlider from "../ui/SpecializeSlider";
import { useRecoilValue } from "recoil";
import { setLanguage } from "./Header";

// install Swiper modules

const useStyles = makeStyles((theme) => ({
  specialize: {
    flexGrow: 1,
    marginBottom: "150px",
    position: "relative",
    marginTop: "100px",
  },
  imgWrap: {
    textAlign: "center",
    marginTop: "60px",
  },
  textWrap: {
    paddingBottom: "150px !important",
    position: "relatvie",
  },
  button: {
    position: "absolute",
    bottom: 0,
  },
}));

const Specialize = ({ getPosition, screenMode }) => {
  const classes = useStyles();
  const specializeC = useRef();
  const lan = useRecoilValue(setLanguage);

  useEffect(() => {
    let position =
      window.pageYOffset +
      specializeC.current.getBoundingClientRect().top -
      100;
    getPosition("specialize", position);
  }, []);

  return (
    <Box
      ref={specializeC}
      my={2}
      color="text.primary"
      className={`${classes.specialize} specializeWrap`}
    >
      <SpecializeSlider lan={lan} screenMode={screenMode}></SpecializeSlider>
    </Box>
  );
};

export default Specialize;
