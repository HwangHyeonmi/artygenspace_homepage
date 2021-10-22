import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core";
import MainSlider from "../components/MainSlider";
import Specialize from "../components/Specialize";
import BodyLayOut from "../Layout/BodyLayOut";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Contact from "../etc/Contact";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  box: {
    maxWidth: "1920px",
    padding: 0,
  },
}));

export default function Main() {
  const classes = useStyles();
  const [sliderHeight, setSliderHeight] = useState();
  const getSliderHeight = (val) => {
    setSliderHeight(val);
  };
  //work, specialize 위치값 구하기
  const [workPosition, setWorkPosition] = useState();
  const [specializePosition, setSpecializePosition] = useState();
  const [contactPosition, setContactPosition] = useState();
  const [screenMode, setScreenMode] = useState("pc");
  const [contactVal, setContactVal] = useState(false);
  // contact val 받아오기

  const getContactVal = (val) => {
    setContactVal(val);
  };

  useEffect(() => {
    var html = document.querySelector("html");
    var body = document.querySelector("body");

    if (contactVal) {
      html.classList.add("hidden");
      body.classList.add("hidden");
    } else {
      html.classList.remove("hidden");
      body.classList.remove("hidden");
    }
  }, [contactVal]);

  //언어 세팅

  const getPosition = (where, position) => {
    if (where === "specialize") {
      setSpecializePosition(position);
    } else if (where === "work") {
      setWorkPosition(position);
    } else if (where === "footer") {
      setContactPosition(position);
    }
  };

  //window resize event
  const resizeEvent = () => {
    if (window.outerWidth < 1023) {
      setScreenMode("mobile");
    } else {
      setScreenMode("pc");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  return (
    <>
      <div className={classes.box}>
        {sliderHeight && (
          <Header
            mode="home"
            headerVal={true}
            sliderHeight={sliderHeight}
            workPosition={workPosition}
            specializePosition={specializePosition}
            contactPosition={contactPosition}
            getContactVal={getContactVal}
            contactVal={contactVal}
          ></Header>
        )}
        <MainSlider getSliderHeight={getSliderHeight}></MainSlider>
        <BodyLayOut>
          <Specialize
            screenMode={screenMode}
            getPosition={getPosition}
          ></Specialize>
          <Work screenMode={screenMode} getPosition={getPosition}></Work>
        </BodyLayOut>

        <Footer getPosition={getPosition}></Footer>
        {contactVal && (
          <Contact
            getContactVal={getContactVal}
            contactVal={contactVal}
          ></Contact>
        )}
      </div>
    </>
  );
}
