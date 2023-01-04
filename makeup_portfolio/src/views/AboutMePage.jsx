import React from "react";
import LeftNav from "../components/nav/LeftNav";

export default function AboutMePage() {
  return (
    <div>
      <LeftNav />
      <div
        id="container2"
        name="container2"
        style={{
          backgroundColor: "black",
          height: 300,
          width: 300,
          marginTop: 1500,
          marginLeft: 300,
        }}
      ></div>
    </div>
  );
}
