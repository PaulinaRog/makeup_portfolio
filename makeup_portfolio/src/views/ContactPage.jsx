import React from "react";
import { useState } from "react";
import LeftNav from "../components/nav/LeftNav";

export default function ContactPage() {
  const [style, setStyle] = useState(null);
  const [style2, setStyle2] = useState(null);
  const [style3, setStyle3] = useState(null);
  const [screen, setScreen] = useState(null);
  const [margin, setMargin] = useState(null);

  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  const handleClick = () => {
    setStyle({ animation: "label linear 0.5s", left: "1em", top: "0.75em" });
    setScreen(
      screenHeight <= 750 && screenWidth <= 500 ? { height: "150vh" } : null
    );
    setMargin(
      screenHeight <= 750 && screenWidth <= 500
        ? { top: "10%", transform: "translate(-50%)" }
        : null
    );
  };

  const handleClick2 = () => {
    setStyle2({ animation: "label linear 0.5s", left: "1em", top: "0.75em" });
    setScreen(
      screenHeight <= 750 && screenWidth <= 500 ? { height: "150vh" } : null
    );
    setMargin(
      screenHeight <= 750 && screenWidth <= 500
        ? { top: "10%", transform: "translate(-50%)" }
        : null
    );
  };

  const handleClick3 = () => {
    setStyle3({ animation: "label linear 0.5s", left: "1em", top: "0.75em" });
    setScreen(
      screenHeight <= 750 && screenWidth <= 500 ? { height: "150vh" } : null
    );
    setMargin(
      screenHeight <= 750 && screenWidth <= 500
        ? { top: "10%", transform: "translate(-50%)" }
        : null
    );
  };

  return (
    <div className="index" style={screen ? screen : null}>
      <LeftNav />
      <div className="contact" style={margin ? margin : null}>
        <div className="contact-2">
          <div className="contact-3">
            <div className="contact-4">
              <form className="contact-form">
                <div className="contact-input-container">
                  <label className="contact-label" style={style ? style : null}>
                    name
                  </label>
                  <input
                    type="text"
                    className="contact-input"
                    onClick={handleClick}
                  />
                </div>
                <div className="contact-input-container">
                  <label
                    className="contact-label"
                    style={style2 ? style2 : null}
                  >
                    mail
                  </label>
                  <input
                    type="text"
                    className="contact-input"
                    onClick={handleClick2}
                  />
                </div>
                <div className="contact-input-container">
                  <label
                    className="contact-label"
                    style={style3 ? style3 : null}
                  >
                    your message
                  </label>
                  <textarea
                    type="text"
                    className="contact-textarea textarea"
                    onClick={handleClick3}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
