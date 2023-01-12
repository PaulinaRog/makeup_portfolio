import React from "react";
import { useState } from "react";
import LeftNav from "../components/nav/LeftNav";

export default function AboutMePage() {
  const [span1, setSpan1] = useState({ display: "none" });
  const [span2, setSpan2] = useState(null);
  const [span3, setSpan3] = useState(null);
  const [span4, setSpan4] = useState(null);
  const [elem1, setElem1] = useState(null);
  const [elem2, setElem2] = useState(null);
  const [elem3, setElem3] = useState(null);
  const [elem4, setElem4] = useState(null);
  const [content1, setContent1] = useState(null);
  const [content2, setContent2] = useState({ display: "none" });
  const [content3, setContent3] = useState({ display: "none" });
  const [content4, setContent4] = useState({ display: "none" });

  const screenWidth = window.innerWidth;
  console.log(screenWidth);

  const handleClick1 = (e) => {
    e.preventDefault();
    setSpan1({ display: "none" });
    setSpan2(null);
    setSpan3(null);
    setSpan4(null);
    setElem1(null);
    setElem2(null);
    setElem3(null);
    setElem4(null);
    setContent1(null);
    setContent2({ display: "none" });
    setContent3({ display: "none" });
    setContent4({ display: "none" });
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    if (screenWidth < 960) {
      setElem1({ height: "10vh" });
      setElem2({ height: "50vh", top: "calc(20% + 20px)" });
    }

    if (screenWidth > 960) {
      setElem1({ width: "10vw", left: "18%" });
      setElem2({ width: "40vw", display: "flex" });
    }

    setElem3(null);
    setSpan3(null);
    setContent3({ display: "none" });
    setElem4(null);
    setSpan4(null);
    setContent4({ display: "none" });
    setSpan1({ display: "block" });
    setContent1({ display: "none" });
    setSpan2({ display: "none" });
    setContent2({ display: "block" });
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    if (screenWidth < 960) {
      setElem1({ height: "10vh" });
      setElem2({ top: "calc(20% + 20px)" });
      setElem3({ height: "50vh", top: "calc(30% + 40px)" });
    }

    if (screenWidth >= 960) {
      setElem1({ width: "10vw", left: "18%" });
      setElem2({ left: "29%" });
      setElem3({ width: "40vw", display: "flex" });
    }
    setSpan1({ display: "block" });
    setContent1({ display: "none" });
    setSpan3({ display: "none" });
    setContent3({ display: "block" });
    setSpan2(null);
    setContent2({ display: "none" });
    setElem4(null);
    setSpan4(null);
    setContent4({ display: "none" });
  };

  const handleClick4 = (e) => {
    e.preventDefault();
    if (screenWidth < 960) {
      setElem1({ height: "10vh" });
      setElem2({ top: "calc(20% + 20px)" });
      setElem3({ top: "calc(30% + 40px)" });
      setElem4({ height: "50vh", top: "calc(40% + 60px)" });
    }

    if (screenWidth >= 960) {
      setElem1({ width: "10vw", left: "18%" });
      setElem2({ left: "29%" });
      setElem3({ left: "40%" });
      setElem4({ width: "40vw", display: "flex" });
    }
    setContent4({ display: "block" });
    setSpan1({ display: "block" });
    setContent1({ display: "none" });
    setSpan2(null);
    setContent2({ display: "none" });
    setContent3({ display: "none" });
    setSpan3(null);
    setSpan4({ display: "none" });
  };

  return (
    <div className="aboutme">
      <LeftNav />
      <div className="aboutme-moving" style={elem1}>
        <span className="aboutme-title" style={span1} onClick={handleClick1}>
          adipisicing elit
        </span>
        <div className="aboutme-photo" style={content1}></div>
      </div>
      <div className="aboutme-moving-elem" style={elem2}>
        <span className="aboutme-title" style={span2} onClick={handleClick2}>
          lorem ipsum
        </span>
        <div className="aboutme-content1" style={content2}>
          <span>span</span>
        </div>
      </div>
      <div className="aboutme-moving-elem2" style={elem3}>
        <span className="aboutme-title" style={span3} onClick={handleClick3}>
          dolor sit
        </span>
        <div className="aboutme-content1" style={content3}>
          <span>span</span>
        </div>
      </div>
      <div className="aboutme-moving-elem3" style={elem4}>
        <span className="aboutme-title" style={span4} onClick={handleClick4}>
          about me
        </span>
        <div className="aboutme-content1" style={content4}>
          <span>span</span>
        </div>
      </div>
    </div>
  );
}
