import React from "react";

import ContactUs from "./libarary/ContactUs";

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
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  );
};

export default Contact;
