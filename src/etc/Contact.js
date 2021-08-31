import React, { useEffect, useState } from "react";
import ContactUs from "./CotactUs";

const Contact = ({ getContactVal }) => {
  return (
    <div className="contactP">
      <div className="contact">
        <div className="contactWrap">
          <div>
            <div className="contactTitle">
              <h2>Contact Us</h2>
              {/*  <p className="text">Do you want to work with us?</p> */}
              <div
                className="cancle"
                onClick={function () {
                  getContactVal(false);
                }}
              >
                <img alt="cancel" src="../img/cancle.png" />
              </div>
            </div>
            <div className="sendContact">
              <ContactUs></ContactUs>
            </div>
          </div>
        </div>
      </div>
      <div className="contactBg"></div>
    </div>
  );
};

export default Contact;
