import React, { useState } from "react";
import LeftNav from "../components/nav/LeftNav";
import PagesNav from "../components/pages/PagesNav";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [num, setNum] = useState(1);

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
      />
      <button className="portfolio-button-next">
        <a className="portfolio-next-page" onClick={handleClick}>
          Next
        </a>
      </button>
      <button className="portfolio-button-prev">
        <a className="portfolio-prev-page" onClick={handleClickRev}>
          Prev
        </a>
      </button>
    </div>
  );
}
