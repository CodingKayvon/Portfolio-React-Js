import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-w">
      <span>Contact</span>

      <div className="link-w">

        <div className="linkCollection">
          <div className="linkIcon"><MdEmail /></div>
          <span>washingtonkayvon@aol.com</span>
        </div>

        <div className="linkCollection">
          <div className="linkIcon"><FaSquarePhoneFlip /></div>
          <span>(760) - 401 - 0906</span>
        </div>

        <div className="linkCollection">
          <div className="linkIcon"><FaSquareGithub /></div>
          <span>https://github.com/CodingKayvon</span>
        </div>

        <div className="linkCollection"> 
          <div className="linkIcon"><FaLinkedin /></div>
          <span>www.linkedin.com/in/kayvonwash</span>
        </div>

      </div>

    </div>
  );
};

export default Contact;
