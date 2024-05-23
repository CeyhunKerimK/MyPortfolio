import React, { useState, useEffect } from "react";
import "./sidebar.css";
import Logo from "../../assets/anime.svg";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" className="nav__img" />
        </a>

        

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
              <li className="nav__item">
              <button className="theme-toggle" onClick={toggleTheme}>
                <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
              </button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </aside>

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
