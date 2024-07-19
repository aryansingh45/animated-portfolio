import React from "react";
import resume from "../components/pdf/Resume.pdf";
import logo from "./data/home.json";
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "Myself Akash Singh",
        "I am a Frontend Developer",
        "Competitive Programmer",
      ],
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>Hey!! there</h1>
          <a
            href={resume}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
            style={{
              border: "2px solid yellow",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`assets/${logo.imgSrc}`} alt="coder"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
