import React from "react";
import { Link } from "react-router-dom";

export default function Access() {
  return (
    <main className="main">
      <h1>Where is Kanbe Udon?</h1>
      <img src="images/access/access-1.png" alt="" />

      <div className="access-info-container">
        <div className="access-line-container">
          <img src="images/access/pin-icon.svg" alt="" />
          <h4>1-12-15 Chojabaruhigashi, Kasuya, Fukuoka, 811-2317</h4>
        </div>

        <div className="access-line-container">
          <img src="images/access/phone-icon.svg" alt="" />
          <h4>+81-92-938-4051</h4>
        </div>

        <div className="access-line-container">
          <img src="images/access/clock-icon.svg" alt="" />
          <h4>
            Open everyday from <br /> 11 AM - 8:30 PM <br /> (Closed on{" "}
            <span className="red">Tuesdays</span> )
          </h4>
        </div>
      </div>
    </main>
  );
}