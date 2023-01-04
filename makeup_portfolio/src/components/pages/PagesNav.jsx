import React, { useState } from "react";

export default function PagesNav({
  setActiveTab,
  setCurrentPage,
  currentPage,
}) {
  return (
    <div className="portfolio-pages-nav">
      <div
        style={{ backgroundColor: currentPage === 1 ? "#b2ab76" : null }}
        className="portfolio-pages-nav-dot"
        onClick={() => {
          setCurrentPage(1);
          setActiveTab(1);
        }}
      ></div>
      <div
        style={{ backgroundColor: currentPage === 2 ? "#b2ab76" : null }}
        className="portfolio-pages-nav-dot"
        onClick={() => {
          setCurrentPage(2);
          setActiveTab(2);
        }}
      ></div>
      <div
        style={{ backgroundColor: currentPage === 3 ? "#b2ab76" : null }}
        className="portfolio-pages-nav-dot"
        onClick={() => {
          setCurrentPage(3);
          setActiveTab(3);
        }}
      ></div>
      <div
        style={{ backgroundColor: currentPage === 4 ? "#b2ab76" : null }}
        className="portfolio-pages-nav-dot"
        onClick={() => {
          setCurrentPage(4);
          setActiveTab(4);
        }}
      ></div>
    </div>
  );
}
