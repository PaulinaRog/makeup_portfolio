import React from "react";
import { useState } from "react";

export default function ImgInfo({
  info: { title, id, description },
  textStyle,
}) {
  const screenWidth = window.innerWidth;

  const [style, setStyle] = useState(null);
  const [boxStyle, setBoxStyle] = useState(null);
  const [button1, setButton1] = useState(null);
  const [button2, setButton2] = useState({ display: "none" });

  const handleClick = (e) => {
    e.preventDefault();
    if (screenWidth < 960) {
      setBoxStyle({
        zIndex: 10,
        backgroundImage: "linear-gradient(#393939aa 0%, #84848486 100%)",
        backdropFilter: "blur(4px)",
      });
      setStyle({ display: "block", padding: "2em" });
      setButton1({ display: "none" });
      setButton2({ display: "block" });
    }
  };

  const handleClickHide = (e) => {
    e.preventDefault();
    if (screenWidth < 960) {
      setButton1({ display: "block" });
      setButton2({ display: "none" });
      setStyle(null);
      setBoxStyle(null);
    }
  };

  return (
    <>
      <div
        className="portfolio-info"
        style={screenWidth < 960 ? boxStyle : null}
      >
        <button
          onClick={handleClick}
          className="portfolio-arrow"
          style={screenWidth < 960 ? button1 : null}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
        <button
          onClick={handleClickHide}
          className="portfolio-arrow"
          style={screenWidth < 960 ? button2 : null}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <h2 className="portfolio-title" style={textStyle}>
          {title}
        </h2>
        <p
          className="portfolio-desc"
          style={screenWidth > 960 ? textStyle : style && style}
        >
          {description}
        </p>
      </div>
    </>
  );
}
