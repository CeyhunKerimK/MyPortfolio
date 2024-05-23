import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <div className="contact__email-box">
            <a href="mailto:kilicceyhun131@gmail.com" className="contact__email">kilicceyhun131@gmail.com</a>
          </div>
          <div className="contact__socials">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer noopener" className="contact__social"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer noopener" className="contact__social"><i className="fab fa-linkedin"></i></a>
            <a href="https://leetcode.com/yourusername" target="_blank" rel="noreferrer noopener" className="contact__social"><i className="fas fa-code"></i></a>
            <a href="https://hackerrank.com/yourusername" target="_blank" rel="noreferrer noopener" className="contact__social"><i className="fab fa-hackerrank"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
