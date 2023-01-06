import React, { useState } from "react";

export default function PagesNav({
  setActiveTab,
  setCurrentPage,
  currentPage,
  setNum,
}) {
  return (
    <div className="portfolio-pages-nav">
      <div
        style={{ backgroundColor: currentPage === 1 ? "#b2ab76" : null }}
        className="portfolio-pages-nav-dot"
        onClick={() => {
          setCurrentPage(1);
          setNum(1);
        }}
      ></div>
      <div
        style={{ backgroundColor: currentPage === 2 ? "#b2ab76" : null }}
        className="portfolio-pages-nav-dot"
        onClick={() => {
          setCurrentPage(2);
          setNum(2);
        }}
      ></div>
      <div
        style={{ backgroundColor: currentPage === 3 ? "#b2ab76" : null }}
        className="portfolio-pages-nav-dot"
        onClick={() => {
          setCurrentPage(3);
          setNum(3);
        }}
      ></div>
      <div
        style={{ backgroundColor: currentPage === 4 ? "#b2ab76" : null }}
        className="portfolio-pages-nav-dot"
        onClick={() => {
          setCurrentPage(4);
          setNum(4);
        }}
      ></div>
    </div>
  );
}
