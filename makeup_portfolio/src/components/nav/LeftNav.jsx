import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LeftNav() {
  const { pathname } = useLocation();
  const screenWidth = window.innerWidth;
  const [style, setStyle] = useState(null);

  useEffect(() => {
    if (pathname === "/" && screenWidth <= 460) {
      setStyle({ display: "flex" });
    }
  }, []);

  return (
    <>
      <div className="nav">
        <div className="nav-page">
          <NavLink to="/">
            <h2>G</h2>
          </NavLink>
          <AboutMe />
          <Portfolio />
          <Contact />
        </div>
        <div className="nav-sm" style={style}>
          <a href="https://facebook.com">
            <i className="fa-brands fa-facebook-f links-icon"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fa-brands fa-instagram links-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
}
