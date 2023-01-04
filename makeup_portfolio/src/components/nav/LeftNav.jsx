import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

export default function LeftNav() {
  return (
    <div className="nav">
      <div className="nav-page">
        <AboutMe />
        <Portfolio />
        <Contact />
        <Outlet />
      </div>
      <div className="nav-sm">
        <a href="https://facebook.com">
          <i className="fa-brands fa-facebook-f links-icon"></i>
        </a>
        <a href="https://instagram.com">
          <i className="fa-brands fa-instagram links-icon"></i>
        </a>
      </div>
    </div>
  );
}
