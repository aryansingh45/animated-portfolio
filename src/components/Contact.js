import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com" target="_blank" className="items">
            <RiInstagramLine className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-singh-54529a1b0/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://x.com/AkkiSingh_11"
            target="_blank"
            className="items"
          >
            <FaXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/Akashsingh1118"
            target="_blank"
            className="items"
          >
            <FaSquareGithub className="icons" />
          </a>
          <a
            href="mailto:taryan413@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
