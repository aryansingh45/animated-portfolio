import React from "react";
import experience from "./data/experience.json";
const Experience = () => {
  return (
    <>
      <div className="container exp" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="exp-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img
                    src={`assets/${data.imageSrc}`}
                    alt="company_logo"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}
                    </span>
                  </h4>
                  {data.experiences.map((item) => {
                    return (
                      <h5 style={{ color: "yellow" }} key={item.id}>
                        {item.description}
                      </h5>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
