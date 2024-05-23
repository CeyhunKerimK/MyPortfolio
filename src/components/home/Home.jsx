import React from "react";
import "./home.css";
import Me from "../../assets/profile.jpeg";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="Ceyhun Kerim Kılıç" className="home__img" />
        <h1 className="home__name">Ceyhun Kerim Kılıç</h1>
        <span className="home__title">Jr. Full-Stack Web Developer</span>
      </div>
      <Shapes />
    </section>
  );
};
export default Home;
