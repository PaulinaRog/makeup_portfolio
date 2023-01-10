import React from "react";
import { useState } from "react";
import LeftNav from "../components/nav/LeftNav";

export default function AboutMePage() {
  return (
    <div className="aboutme">
      <LeftNav />
      <div className="aboutme-moving">
        <div className="aboutme-photo"></div>
      </div>
      <div className="aboutme-moving-elem">
        <span className="aboutme-title">lorem ipsum</span>
      </div>
      <div className="aboutme-moving-elem2">
        <span className="aboutme-title">dolor sit</span>
      </div>
      <div className="aboutme-moving-elem3">
        <span className="aboutme-title">about me</span>
      </div>
    </div>
  );
}
