import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items] = useState(Menu);

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, link } = elem; // link ekledim

          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <h3 className="work__title">{title}</h3>
              {link ? (
                <a href={link} className="work__button" target="_blank" rel="noopener noreferrer">
                  <i className="icon-link work__button-icon"></i>
                </a>
              ) : (
                <button className="work__button">
                  <i className="icon-link work__button-icon"></i>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
