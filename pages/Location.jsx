import React from "react";
import { Link } from "react-router-dom";

export default function Location() {
  return (
    <main className="main">
      <h1>Where is Kanbe Udon?</h1>
    
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13290.462083208877!2d130.47850200000002!3d33.61527900000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541857b0c8407f1%3A0xcf9838c6b7676b13!2sKanbei%20Udon!5e0!3m2!1sen!2sus!4v1677609279503!5m2!1sen!2sus"
          width="90%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      

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