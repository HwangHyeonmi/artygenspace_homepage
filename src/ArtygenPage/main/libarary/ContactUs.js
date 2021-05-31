import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const userName = useRef();
  const userMail = useRef();
  const textArea = useRef();
  const [sendClickVal, setSendClickVal] = useState(true);

  function sendEmail(e) {
    e.preventDefault();
    if (sendClickVal === true) {
      if (
        userName.current.value === "" ||
        userMail.current.value === "" ||
        textArea.current.value === ""
      ) {
        if (userName.current.value === "") {
          userName.current.placeholder = "Please enter your name.";
          userName.current.classList.add("placeholder");
        }
        if (userMail.current.value === "") {
          userMail.current.placeholder = "Please enter your email";
          userMail.current.classList.add("placeholder");
        }
        if (textArea.current.value === "") {
          textArea.current.placeholder = "Please enter a message";
          textArea.current.classList.add("placeholder");
        }
      } else {
        emailjs
          .sendForm(
            "service_jzbrri7",
            "template_yc09a37",
            e.target,
            "user_JmqQlP2VKFWP3yoUSFsPG"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("Your message has been sent.");
              setSendClickVal(true);
              document.querySelectorAll(".contactBg2")[0].style.display =
                "none";
              document.querySelectorAll(".contactBg2")[1].style.display =
                "none";
            },
            (error) => {
              console.log(error.text);
            }
          );
        setSendClickVal(false);

        document.querySelectorAll(".contactBg2")[0].style.display = "block";
        document.querySelectorAll(".contactBg2")[1].style.display = "block";
      }
    }
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input ref={userName} type="text" name="from_name" placeholder="Name" />
      <input
        ref={userMail}
        type="email"
        name="from_email"
        placeholder="Email"
      />
      <textarea ref={textArea} name="message_html" placeholder="Message" />
      <input type="submit" className="submit" value="Send" />
    </form>
  );
}
