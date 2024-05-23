import React from "react";
import "./about.css";
import CV from "../../assets/CeyhunKerimKılıç.pdf"; // CV dosyasının doğru yolu

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Ceyhun Kerim Kılıç, a Jr. Full-Stack Web Developer from Gebze, Kocaeli, Türkiye. I have rich experience in developing web applications using Java Spring-Boot and Node.js. I am known for my problem-solving skills, eagerness to learn, and effective communication within my team.
            </p>
            <a href={CV} className="btn" download>
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-End Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End Development</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Problem-Solving</h3>
                <span className="skills__number">95%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage problem__solving"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
