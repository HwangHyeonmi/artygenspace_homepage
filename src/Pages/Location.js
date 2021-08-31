import {
    Box,
    Container,
    Grid,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React, { useEffect, useState } from "react";
  import { RecoilRoot, useRecoilValue } from "recoil";
  import Header, { setLanguage } from "../components/Header";
  import Contact from "../etc/Contact";
  import NaverAPIMap from "../etc/NaverAPIMap";
  import BodyLayOut from "../Layout/BodyLayOut";
  
  const useStyles = makeStyles((theme) => ({
    /*  container: {
      maxWidth: "1600px",
      padding: 0,
      height: "auto",
    }, */
    box: {
      position: "relative",
      top: "140px",
      width: "100%",
    },
    div: {
      float: "left",
    },
    width: {
      width: "100%",
    },
  }));
  
  const Location = (props) => {
    const classes = useStyles();
    const [screenMode, setScreenMode] = useState("pc");
    const lan = useRecoilValue(setLanguage);
    const [contactVal, setContactVal] = useState(false);
    // contact val 받아오기
  
    const getContactVal = (val) => {
      setContactVal(val);
    };
  
    return (
      <div>
        <Container className={`locationContainer`}>
          <Header
            screenMode={screenMode}
            headerVal={false}
            mode="location"
            getContactVal={getContactVal}
            contactVal={contactVal}
          ></Header>
          <BodyLayOut>
            <Box
              my={2}
              color="text.primary"
              className={`${classes.box} location`}
            >
              <h2 className="title">LOCATION</h2>
  
              <div className="map">
                <NaverAPIMap></NaverAPIMap>
              </div>
              <hr></hr>
              <div className="address ">
                <div className="addressTitle">address</div>
                <div className="addressText">
                  {lan.location.contents[0]}
                  <br />
                  {lan.location.contents[1]}
                </div>
              </div>
              <div className="address ">
                <div className="addressTitle">e-mail</div>
                <div className="addressText">contact@artygenspace.com</div>
              </div>
            </Box>
          </BodyLayOut>
        </Container>
        {contactVal && (
          <Contact
            getContactVal={getContactVal}
            contactVal={contactVal}
          ></Contact>
        )}
      </div>
    );
  };
  
  export default Location;
  