import React from "react";
import { useState } from "react";
import LeftNav from "../components/nav/LeftNav";

export default function ContactPage() {
  const [style, setStyle] = useState(null);
  const [style2, setStyle2] = useState(null);
  const [style3, setStyle3] = useState(null);
  const [screen, setScreen] = useState(null);
  const [container, setContainer] = useState(null);
  const [container2, setContainer2] = useState(null);
  const [container3, setContainer3] = useState(null);
  const [form, setForm] = useState(null);
  const [text, setText] = useState(null);
  const timeout = () => {
    setTimeout(() => {
      setForm({ animation: "appear linear 1s" });
      setText(null);
    }, [7000]);
  };

  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  const handleClick = () => {
    setStyle({ animation: "label linear 0.5s", left: "1em", top: "0.75em" });
    screenHeight <= 1600 && screenWidth <= 960
      ? setScreen({ height: "120vh" })
      : null;
    screenHeight <= 750 && screenWidth <= 500
      ? setScreen({ height: "150vh" })
      : null;
    screenHeight <= 1600 && screenWidth <= 960
      ? setContainer({ top: "20%", transform: "translate(-50%)" })
      : null;
    screenHeight <= 750 && screenWidth <= 500
      ? setContainer({ top: "10%", transform: "translate(-50%)" })
      : null;
  };

  const handleClick2 = () => {
    setStyle2({ animation: "label linear 0.5s", left: "1em", top: "0.75em" });
    screenHeight <= 1600 && screenWidth <= 960
      ? setScreen({ height: "120vh" })
      : null;
    screenHeight <= 750 && screenWidth <= 500
      ? setScreen({ height: "150vh" })
      : null;
    screenHeight <= 1600 && screenWidth <= 960
      ? setContainer({ top: "20%", transform: "translate(-50%)" })
      : null;
    screenHeight <= 750 && screenWidth <= 500
      ? setContainer({ top: "10%", transform: "translate(-50%)" })
      : null;
  };

  const handleClick3 = () => {
    setStyle3({ animation: "label linear 0.5s", left: "1em", top: "0.75em" });
    screenHeight <= 1600 && screenWidth <= 960
      ? setScreen({ height: "120vh" })
      : null;
    screenHeight <= 750 && screenWidth <= 500
      ? setScreen({ height: "150vh" })
      : null;
    screenHeight <= 1600 && screenWidth <= 960
      ? setContainer({ top: "20%", transform: "translate(-50%)" })
      : null;
    screenHeight <= 750 && screenWidth <= 500
      ? setContainer({ top: "10%", transform: "translate(-50%)" })
      : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      animation: "disappear linear 0.2s",
      visibility: "hidden",
      opacity: 0,
    });
    if (screenWidth <= 460) {
      setContainer({ animation: "circles-mob linear 1s" });
      setContainer2({ animation: "circles2-mob linear 1.5s" });
      setContainer3({ animation: "circles3-mob linear 1.9s" });
    }
    if (screenWidth <= 960 && screenWidth >= 461) {
      setContainer({ animation: "circles-tab linear 1s" });
      setContainer2({ animation: "circles2-tab linear 1.3s" });
      setContainer3({ animation: "circles3-tab linear 1.6s" });
    }
    if (screenWidth > 960) {
      setContainer({ animation: "circles-desk linear 1s" });
      setContainer2({ animation: "circles2-desk linear 1.2s" });
      setContainer3({ animation: "circles3-desk linear 1.4s" });
    }
    setText("message sent!");
    timeout();
  };

  return (
    <div className="index" style={screen ? screen : null}>
      <LeftNav />
      <div className="contact" style={container ? container : null}>
        <div className="contact-2" style={container2 ? container2 : null}>
          <div className="contact-3" style={container2 ? container2 : null}>
            <div className="contact-4">
              {text ? <p className="contact-message-sent">{text}</p> : null}
              <form className="contact-form" style={form ? form : null}>
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
                <button
                  type="submit"
                  className="contact-button"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
