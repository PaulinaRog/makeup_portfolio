import React, { useState } from "react";
import LeftNav from "../components/nav/LeftNav";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";
import { useEffect } from "react";
import supabase from "../services/supabaseClient";
import ImgInfo from "../components/pages/ImgInfo";

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [num, setNum] = useState(currentPage);
  const [prevStyle, setPrevStyle] = useState({ display: "block" });
  const [nextStyle, setNextStyle] = useState({ display: "block" });
  const [style, setStyle] = useState(null);
  const [style2, setStyle2] = useState({ display: "none" });
  const [style3, setStyle3] = useState({ display: "none" });
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [info, setInfo] = useState(null);
  const [textStyle, setTextStyle] = useState(null);

  const screenWidth = window.innerWidth;

  useEffect(() => {
    const getInfo = async () => {
      const { data, error } = await supabase
        .from("portfolio")
        .select("*")
        .eq("id", currentPage)
        .single();
      if (!error) {
        setInfo(data);
      }
    };
    getInfo();

    currentPage === 1 && setPrevStyle({ display: "none" });
    currentPage >= 2 && setPrevStyle({ display: "block" });
    currentPage === list.length && setNextStyle({ display: "none" });
    currentPage === list.length - 1 && setNextStyle({ display: "block" });
    if (screenWidth > 960) {
      setStyle2(null);
    }

    if (screenWidth <= 960) {
      setTimeout(() => {
        setStyle(null);
        setTextStyle(null);
      }, [1000]);
    }

    if (next === true) {
      if (screenWidth <= 960) {
        setStyle({ animation: "slidein ease-out 1s" });
      }
      if (screenWidth > 960) {
        setStyle({ animation: "photo-change linear 1s" });
        setStyle2({ animation: "photo-change2 linear 1s" });
      }
    }

    if (prev === true) {
      if (screenWidth <= 960) {
        setStyle({ animation: "slideinright ease-out 1s" });
      }
      if (screenWidth > 960) {
        setStyle2({ animation: "photo-change-back linear 1s" });
        setStyle3({ animation: "photo-change-back2 linear 1s" });
      }
    }

    if (screenWidth > 960) {
      setTimeout(() => {
        setStyle(null);
        setStyle2(null);
        setStyle3({ display: "none" });
        setTextStyle(null);
      }, [1000]);
    }
  }, [currentPage]);

  const list = [Img1, Img2, Img3, Img4];

  const handleClick = () => {
    if (screenWidth <= 960) {
      setStyle({ animation: "slideout ease-out 1s" });
      setTextStyle({ animation: "appear linear 2s" });
    }
    setNext(true);
    if (screenWidth > 960) {
      setStyle({ animation: "photo-change3 linear 1s" });
      setTextStyle({ animation: "appear linear 3s" });
    }
    setPrev(false);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setNum(num + 1);
    }, [500]);
  };

  const handleClickRev = () => {
    if (screenWidth <= 960) {
      setStyle({ animation: "slideoutright ease-out 1s" });
      setTextStyle({ animation: "appear linear 2s" });
    }
    if (screenWidth > 960) {
      setTextStyle({ animation: "appear linear 4s" });
    }
    setPrev(true);
    setNext(false);
    setTimeout(() => {
      setStyle({ animation: "photo-change-back3 linear 1s" });
      setCurrentPage(currentPage - 1);
      setNum(num - 1);
    }, [500]);
  };

  return (
    <div className="portfolio">
      <LeftNav />
      {currentPage === num && (
        <>
          <img className="portfolio-img" src={list[num - 1]} style={style} />
          <img
            className="portfolio-img-second"
            name="second"
            id="second"
            src={list[num]}
            style={style2}
          />
          <img
            className="portfolio-img-third"
            src={list[num + 1]}
            style={style3}
          />
          {info && <ImgInfo textStyle={textStyle} info={info} />}
        </>
      )}
      <button
        onClick={handleClick}
        className="portfolio-button-next"
        style={nextStyle}
      >
        next
      </button>
      <button
        onClick={handleClickRev}
        className="portfolio-button-prev"
        style={prevStyle}
      >
        prev
      </button>
    </div>
  );
}
