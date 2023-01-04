import React from "react";
import LeftNav from "../components/nav/LeftNav";

export default function Index() {
  return (
    <div className="index">
      <div className="index-container">
        <img src="./src/assets/gosia_main.png" className="index-photo" />
        <div className="decor"></div>
      </div>
      <div className="index-header">
        <h1 className="index-header-title">Gosia Majewska</h1>
        <p>Make-up artist</p>
      </div>
      <LeftNav />
    </div>
  );
}
