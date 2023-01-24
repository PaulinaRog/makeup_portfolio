import React from "react";
import LeftNav from "../components/nav/LeftNav";
import Gosia from "../assets/3.jpg";

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
            <p className="index-header-small">MAKEUP ARTIST</p>
          </div>
        </>
        <a href="https://github.com/PaulinaRog" className="madeby">
          made by Paulina Róg
        </a>
      </div>
    </>
  );
}
