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
  const [info, setInfo] = useState({ display: "none" });
  const [disabled, setDisabled] = useState(false);
  const timeout = () => {
    setTimeout(() => {
      setForm({ animation: "appear linear 1s" });
      setText(null);
      setStyle(null);
      setStyle2(null);
      setStyle3(null);
      setContainer(null);
      setContainer2(null);
      setContainer3(null);
      setDisabled(false);
    }, [7000]);
  };

  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  const handleFocus = (e) => {
    e.preventDefault();
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

  const handleBlur = () => {
    setScreen(null);
    setContainer(null);
  };

  const handleFocus2 = () => {
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

  const handleFocus3 = () => {
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
    setDisabled(true);
    setForm({
      animation: "disappear linear 0.2s",
      visibility: "hidden",
      opacity: 0,
    });
    setScreen({ height: "120vh" });
    if (screenWidth <= 460) {
      setContainer({ animation: "circles-mob linear 0.5s" });
      setContainer2({ animation: "circles2-mob linear 1s" });
      setContainer3({ animation: "circles3-mob linear 1.5s" });
    }
    if (screenWidth <= 960 && screenWidth >= 461) {
      setContainer({ animation: "circles-tab linear 0.8s" });
      setContainer2({ animation: "circles2-tab linear 1.2s" });
      setContainer3({ animation: "circles3-tab linear 1.7s" });
    }
    if (screenWidth > 960) {
      setContainer({ animation: "circles-desk linear 1s" });
      setContainer2({ animation: "circles2-desk linear 1.2s" });
      setContainer3({ animation: "circles3-desk linear 1.4s" });
    }
    setText("message sent!");
    timeout();
  };

  const handleShowInfo = (e) => {
    e.preventDefault();
    if (screenWidth <= 460) {
      setContainer({ display: "none" });
      setInfo({ display: "flex" });
      setScreen({ height: "100vh" });
    }
  };

  const handleShowForm = (e) => {
    e.preventDefault();
    if (screenWidth <= 460) {
      setContainer({ display: "flex" });
      setInfo({ display: "none" });
      setScreen({ height: "110vh" });
    }
  };

  return (
    <div className="contact-bg" style={screen ? screen : null}>
      <LeftNav />
      <div className="contact" style={container ? container : null}>
        <div className="contact-2" style={container2 ? container2 : null}>
          <div className="contact-3" style={container3 ? container3 : null}>
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
                    onBlur={handleBlur}
                    onFocus={handleFocus}
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
                    onBlur={handleBlur}
                    onFocus={handleFocus2}
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
                    onFocus={handleFocus3}
                    onBlur={handleBlur}
                  />
                </div>
                <button
                  type="submit"
                  className="contact-button"
                  onClick={handleSubmit}
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-buttons-container">
        <button
          className="contact-buttons"
          onClick={handleShowForm}
          style={screenWidth > 460 ? { display: "none" } : null}
        >
          contact form
        </button>
        <button
          disabled={disabled}
          className="contact-buttons"
          onClick={handleShowInfo}
          style={screenWidth > 460 ? { display: "none" } : null}
        >
          contact info
        </button>
      </div>
      <div className="contact-info" style={screenWidth <= 460 ? info : null}>
        <h3>lorem ipsum</h3>
        <div className="contact-decor"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
          praesentium aliquid, incidunt ducimus aperiam velit quos natus
          accusantium voluptatum rem optio sequi nesciunt at dignissimos ut est
          dolorem similique non!
        </p>
        <div className="contact-decor"></div>
        <p>mob: 123 456 789</p>
        <p>e-mail: user@user.com</p>
      </div>
    </div>
  );
}
