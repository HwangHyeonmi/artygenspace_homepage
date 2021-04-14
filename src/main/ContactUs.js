import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const userName = useRef();
  const userMail = useRef();
  const textArea = useRef();

  function sendEmail(e) {
    e.preventDefault();

    console.log(userName.current.value);

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
          "service_g2o01eh",
          "template_lublkb8",
          e.target,
          "user_Iak9XQdYZeP7dfMyD6Rao"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("메일을 전송했습니다.");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input ref={userName} type="text" name="user_name" placeholder="Name" />
      <input ref={userMail} type="email" name="Email" placeholder="Email" />
      <textarea ref={textArea} name="message" placeholder="Message" />
      <input type="submit" className="submit" value="Send" />
    </form>
  );
}
