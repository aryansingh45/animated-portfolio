import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left_side nav_links">PORTFOLIO</div>
        <div className="right_side">
          <a href="#home" className="nav_links">
            HOME
          </a>
          <a href="#experience" className="nav_links">
            EXPERIENCE
          </a>
          <a href="#project" className="nav_links">
            PROJECTS
          </a>
          <a href="#skill" className="nav_links">
            SKILLS
          </a>
          <a href="#contact" className="nav_links">
            CONTACTS
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
