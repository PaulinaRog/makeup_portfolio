import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {
  const [style, setStyle] = useState(null);
  const [spanStyle, setSpanStyle] = useState({ display: "none" });

  const handleMouseEnterUser = () => {
    setStyle({
      width: 170,
      borderRadius: 20,
      display: "flex",
      animation: "expand linear 0.5s",
    });
    setSpanStyle({
      fontSize: 16,
      paddingLeft: "3em",
      position: "absolute",
      paddingTop: 10,
      animation: "appear ease-out 1s",
    });
  };

  const handleMouseLeaveUser = () => {
    setStyle({ animation: "hide linear 0.2s" });
    setSpanStyle({ display: "none" });
  };

  return (
    <>
      <NavLink to="/contact">
        <button
          onMouseOver={handleMouseEnterUser}
          onMouseLeave={handleMouseLeaveUser}
          className="nav-elem"
          style={style && style}
        >
          <p>
            <i className="fa-regular fa-envelope nav-icon"></i>

            <span style={spanStyle}>CONTACT</span>
          </p>
        </button>
      </NavLink>
    </>
  );
}
