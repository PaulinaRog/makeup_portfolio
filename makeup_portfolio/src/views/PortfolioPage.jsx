import React, { useState } from "react";
import LeftNav from "../components/nav/LeftNav";
import PagesNav from "../components/pages/PagesNav";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";
import { useEffect } from "react";

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [num, setNum] = useState(currentPage);
  const [prevStyle, setPrevStyle] = useState({ display: "block" });
  const [nextStyle, setNextStyle] = useState({ display: "block" });
  const [style, setStyle] = useState(null);
  const [style2, setStyle2] = useState(null);
  const [style3, setStyle3] = useState({ display: "none" });
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  useEffect(() => {
    currentPage === 1 && setPrevStyle({ display: "none" });
    currentPage >= 2 && setPrevStyle({ display: "block" });
    currentPage === list.length && setNextStyle({ display: "none" });
    currentPage === list.length - 1 && setNextStyle({ display: "block" });

    if (screenWidth <= 460) {
      setStyle2({ display: "none" });
      setTimeout(() => {
        setStyle(null);
      }, [1000]);
    }

    if (next === true) {
      if (screenWidth <= 460) {
        setStyle({ animation: "slidein ease-out 1s" });
      }
      if (screenWidth > 960) {
        setStyle({ animation: "photo-change linear 1s" });
        setStyle2({ animation: "photo-change2 ease-in 1s" });
      }
    }

    if (prev === true) {
      if (screenWidth <= 460) {
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
      }, [1000]);
    }
  }, [currentPage]);

  const list = [Img1, Img2, Img3, Img4];

  const handleClick = () => {
    if (screenWidth <= 460) {
      setStyle({ animation: "slideout ease-out 1s" });
    }
    setNext(true);
    setPrev(false);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setNum(num + 1);
    }, [500]);
  };

  const handleClickRev = () => {
    if (screenWidth <= 460) {
      setStyle({ animation: "slideoutright ease-out 1s" });
    }
    setPrev(true);
    setNext(false);
    setTimeout(() => {
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
          <h2 className="portfolio-title">Lorem ipsum dolor sit amet blabla</h2>
        </>
      )}
      <PagesNav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setNum={setNum}
      />
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
