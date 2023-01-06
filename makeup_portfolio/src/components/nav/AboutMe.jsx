import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AboutMe() {
  const [style, setStyle] = useState(null);
  const [spanStyle, setSpanStyle] = useState({ display: "none" });

  const handleMouseEnterUser = () => {
    setStyle({
      width: 170,
      borderRadius: 20,
      display: "flex",
      animation: "expand linear 0.5s",
      textShadow: "none",
    });
    setSpanStyle({
      fontSize: 16,
      paddingLeft: "3em",
      position: "absolute",
      paddingTop: 8,
      animation: "appear ease-out 1s",
      color: "#929292",
    });
  };

  const handleMouseLeaveUser = () => {
    setStyle({ animation: "hide linear 0.2s" });
    setSpanStyle({ display: "none" });
  };

  return (
    <NavLink to="/aboutme">
      <button
        onMouseOver={handleMouseEnterUser}
        onMouseLeave={handleMouseLeaveUser}
        className="nav-elem"
        style={style && style}
      >
        <i className="fa-regular fa-user nav-icon"></i>
        <span style={spanStyle}>ABOUT ME</span>
      </button>
    </NavLink>
  );
}
