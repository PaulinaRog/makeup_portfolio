import React, { useState } from "react";
import LeftNav from "../components/nav/LeftNav";
import PagesNav from "../components/pages/PagesNav";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";
import { useEffect } from "react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [num, setNum] = useState(currentPage);
  const [prevStyle, setPrevStyle] = useState({ display: "block" });
  const [nextStyle, setNextStyle] = useState({ display: "block" });

  useEffect(() => {
    currentPage === 1 && setPrevStyle({ display: "none" });
    currentPage >= 2 && setPrevStyle({ display: "block" });
    currentPage === list.length && setNextStyle({ display: "none" });
    currentPage === list.length - 1 && setNextStyle({ display: "block" });
  }, [currentPage]);

  const list = [Img1, Img2, Img3, Img4];

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
    setNum(num + 1);
  };

  const handleClickRev = () => {
    setCurrentPage(currentPage - 1);
    setNum(num - 1);
  };

  return (
    <div className="portfolio">
      <LeftNav />
      {currentPage === num && (
        <img className="portfolio-img" src={list[num - 1]} />
      )}
      <PagesNav
        setActiveTab={setActiveTab}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setNum={setNum}
      />
      <button
        onClick={handleClick}
        className="portfolio-button-next"
        style={nextStyle}
      >
        <a className="portfolio-next-page">Next</a>
      </button>
      <button
        onClick={handleClickRev}
        className="portfolio-button-prev"
        style={prevStyle}
      >
        <a className="portfolio-prev-page">Prev</a>
      </button>
    </div>
  );
}
