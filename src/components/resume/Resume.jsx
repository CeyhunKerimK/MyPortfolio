import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">       

        <div className="timeline grid">
          {Data.filter(val => val.category === "experience").map((val, id) => (
            <Card
              key={id}
              icon={val.icon}
              title={val.title}
              year={val.year}
              desc={val.desc}
              skills={val.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
