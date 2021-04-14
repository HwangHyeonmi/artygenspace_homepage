import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "./ContactUs";
import NaverAPIMap from "./NaverAPIMap";

const Contact = (props) => {
  const cancleBtn = () => {
    props.clickNav();
  };

  return (
    <div className="contactWrap">
      <div>
        <div className="contactTitle">
          <h2>Contact Us</h2>
          <p className="text">Do you want to work with us?</p>
          <div
            className="cancle"
            onClick={function () {
              cancleBtn();
            }}
          >
            <img alt="purge limbo" src="img/cancle.png" />
          </div>
        </div>
        <div className="sendContact">
          {/* <form
            action="mainto:brownrice@naver.com"
            method="POST"
            enctype="multipart/form-data"
          >
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="email" placeholder="Email"></input>
            <textarea
              name="comment"
              cols="50"
              rows="5"
              placeholder="Message"
            ></textarea>
            <input
              className="submit"
              onClick={function (e) {
          
              }}
              type="submit"
              value="submit"
            ></input>
          </form> */}
          <ContactUs></ContactUs>
        </div>
      </div>
      {/* <div>
         <div id="map">
          <h2 className="mapTitle">Location</h2>
          <NaverAPIMap></NaverAPIMap>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
