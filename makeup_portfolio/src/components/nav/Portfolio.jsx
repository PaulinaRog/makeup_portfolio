import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Portfolio() {
  const [style, setStyle] = useState(null);
  const [spanStyle, setSpanStyle] = useState({ display: "none" });

  const handleMouseEnterUser = () => {
    setStyle({
      width: 170,
      borderRadius: 20,
      backgroundColor: "#b2ab76",
      color: "black",
      display: "flex",
      animation: "expand linear 0.5s",
      boxShadow: "5px 3px 5px #000000, -1px -2px 3px #d3cb8d",
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
    <NavLink>
      <div
        onMouseOver={handleMouseEnterUser}
        onMouseLeave={handleMouseLeaveUser}
        className="nav-elem"
        style={style && style}
      >
        <p>
          <i className="fa-regular fa-image nav-icon"></i>

          <span style={spanStyle}>PORTFOLIO</span>
        </p>
      </div>
    </NavLink>
  );
}
