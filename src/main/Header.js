import React from "react";
import { useRef } from "react/cjs/react.development";

const Header = (props) => {
  const moveToContentPosition = props.moveToContentPosition;
  const work = props.work;
  const about = props.about;
  const contact = props.contact;
  return (
    <div className="navWrap">
      <div className="mainNav pcNav">
        <div
          onClick={function () {
            moveToContentPosition(work);
          }}
        >
          Work
        </div>
        <div
          onClick={function () {
            moveToContentPosition(about);
          }}
        >
          About
        </div>
        <div
          onClick={function () {
            moveToContentPosition(contact);
          }}
        >
          Contacts
        </div>
      </div>
      <div className="hamburger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div
        className="logo"
        onClick={function () {
          moveToContentPosition("logo");
        }}
      >
        <img alt="logo" src="img/logo_blue.png"></img>
      </div>
    </div>
  );
};

export default Header;
