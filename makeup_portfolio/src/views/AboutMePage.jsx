import React from "react";
import { useState } from "react";
import LeftNav from "../components/nav/LeftNav";

export default function AboutMePage() {
  const [style, setStyle] = useState(null);

  const handleClick = () => {
    setStyle({ animation: "move linear 1s", left: "53%" });
  };

  return (
    <div className="aboutme">
      <LeftNav />
      <div className="aboutme-photo"></div>
      <div
        className="aboutme-moving-elem"
        style={style ? style : null}
        onClick={handleClick}
      >
        <h1 className="aboutme-title">ABOUT ME</h1>
      </div>
      <div className="aboutme-moving-elem2"></div>
      <div className="aboutme-moving-elem3"></div>
    </div>
  );
}
