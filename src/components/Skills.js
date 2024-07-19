import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skill">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => {
            return (
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`assets/${data.imgSrc}`} alt="skillImage" />
                <h3 style={{ marginTop: "10px" }}>{data.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
