import React from "react";
import { useState } from "react";
import LeftNav from "../components/nav/LeftNav";
import Img1 from "../assets/aboutMe.png";
import { useEffect } from "react";
import supabase from "../services/supabaseClient";

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

  const [data, setData] = useState(null);

  const screenWidth = window.innerWidth;

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from("aboutMe")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        setData(data);
      }
    };
    getData();
  }, []);

  const handleClick1 = (e) => {
    e.preventDefault();

    if (screenWidth < 960) {
      setElem1({ animation: "changeHeight linear 1s" });
    }

    if (screenWidth > 960) {
      setElem1({ animation: "changeWidth linear 1s" });
    }
    setSpan1({ display: "none" });
    setSpan2(null);
    setSpan3(null);
    setSpan4(null);
    setElem2(null);
    setElem3(null);
    setElem4(null);
    setContent1({ animation: "appear linear 3s" });
    setContent2({ display: "none" });
    setContent3({ display: "none" });
    setContent4({ display: "none" });
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    if (screenWidth < 960) {
      setElem1({ height: "10vh" });
      setElem2({
        height: "50vh",
        top: "calc(20% + 20px)",
        animation: "changeHeight linear 1s",
      });
    }

    if (screenWidth > 960) {
      setElem1({ width: "10vw", left: "18%" });
      setElem2({
        width: "40vw",
        display: "flex",
        animation: "changeWidth linear 1s",
      });
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
    setContent2({ display: "block", animation: "appear linear 3s" });
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    if (screenWidth < 960) {
      setElem1({ height: "10vh" });
      setElem2({ top: "calc(20% + 20px)" });
      setElem3({
        height: "50vh",
        top: "calc(30% + 40px)",
        animation: "changeHeight linear 1s",
      });
    }

    if (screenWidth >= 960) {
      setElem1({ width: "10vw", left: "18%" });
      setElem2({ left: "29%" });
      setElem3({
        width: "40vw",
        display: "flex",
        animation: "changeWidth linear 1s",
      });
    }
    setSpan1({ display: "block" });
    setContent1({ display: "none" });
    setSpan3({ display: "none" });
    setContent3({ display: "block", animation: "appear linear 3s" });
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
      setElem4({
        height: "50vh",
        top: "calc(40% + 60px)",
        animation: "changeHeight linear 1s",
      });
    }

    if (screenWidth >= 960) {
      setElem1({ width: "10vw", left: "18%" });
      setElem2({ left: "29%" });
      setElem3({ left: "40%" });
      setElem4({
        width: "40vw",
        display: "flex",
        animation: "changeWidth linear 1s",
      });
    }
    setContent4({ display: "block", animation: "appear linear 3s" });
    setSpan1({ display: "block" });
    setContent1({ display: "none" });
    setSpan2(null);
    setContent2({ display: "none" });
    setContent3({ display: "none" });
    setSpan3(null);
    setSpan4({ display: "none" });
  };

  return (
    <>
      <div className="aboutme">
        <LeftNav />
        {data && (
          <>
            <div className="aboutme-moving" style={elem1}>
              <span
                className="aboutme-title"
                style={span1}
                onClick={handleClick1}
              >
                {data[0].verticalText}
              </span>
              <div className="aboutme-photo" style={content1}></div>
            </div>
            <div className="aboutme-moving-elem" style={elem2}>
              <span
                className="aboutme-title"
                style={span2}
                onClick={handleClick2}
              >
                {data[1].verticalText}
              </span>
              <div className="aboutme-content1" style={content2}>
                <h3>{data[1].title}</h3>
                <div className="aboutme-decor"></div>
                <p>{data[1].description}</p>
              </div>
            </div>
            <div className="aboutme-moving-elem2" style={elem3}>
              <span
                className="aboutme-title"
                style={span3}
                onClick={handleClick3}
              >
                {data[2].verticalText}
              </span>
              <div className="aboutme-content1" style={content3}>
                <h3>{data[2].title}</h3>
                <div className="aboutme-decor"></div>
                <p>{data[2].description}</p>
              </div>
            </div>
            <div className="aboutme-moving-elem3" style={elem4}>
              <span
                className="aboutme-title"
                style={span4}
                onClick={handleClick4}
              >
                {data[3].verticalText}
              </span>
              <div className="aboutme-content1" style={content4}>
                <img src={Img1} className="aboutme-photo2" />
                <h3>{data[3].title}</h3>
                <div className="aboutme-decor"></div>
                <p>{data[3].description}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
