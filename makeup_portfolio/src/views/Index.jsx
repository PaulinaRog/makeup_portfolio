import React from "react";
import LeftNav from "../components/nav/LeftNav";
import Gosia from "../assets/gosia_main.png";

export default function Index() {
  return (
    <>
      <div className="index">
        <LeftNav />
        <>
          <div className="index-container">
            <img src={Gosia} className="index-photo" />
          </div>
          <div className="index-header">
            <h1 className="index-header-title">GOSIA MAY</h1>
            <p>MAKEUP ARTIST</p>
          </div>
        </>
      </div>
    </>
  );
}
