
import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="landing-page">
        <h1 className="shop-name">Kanbei Udon</h1>
        <p className="tagline-primary upper">
          A beloved udon shop along the streets of Kasuya, Fukuoka
        </p>
        <div className="landing-page-images-grid">
          <img src="..//images/home/home-1.png" alt="" />
          <img src="../images/home/home-2.png" alt="" />
          <img src="../images/home/home-3.png" alt="" />
        </div>

        <p className="tagline-primary">
          Serving hearty meal to the community since 1977
        </p>

        <Link to="/about" className="button-primary">
          <span>About Kanbei Udon</span>
        </Link>
      </section>
    </main>
  );
}