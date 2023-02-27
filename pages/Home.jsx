import React from "react";
import { Link } from "react-router-dom";
import {specialtyData, popularDishData} from "../data/homeData";


export default function Home() {

  const specialityHTML = specialtyData.map((item, index) => {
    const { title, description, url } = item;
    return (
      <div key={index} className="specialty-card">
        <img src={`${url}`} alt="" />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  });

  const popularDishHTML = popularDishData.map((item,index) => {
    const {url, name} = item;
    return (
      <Link key={index} to={`/menu/${index}`}>
        <div className="popular-dish-card">
          <img src={`${url}`} alt="" />
          <h3>{name}</h3>
        </div>
      </Link>
    );
  })  


  return (
    <main className="main">
      <section className="landing-page-section">
        <h1 className="shop-name">Kanbei Udon</h1>
        <p className="tagline-primary upper">
          A beloved udon shop along the streets of Kasuya, Fukuoka
        </p>
        <div className="landing-page-images-grid">
          <img
            src="/public/images/home.svg"
            alt="Japanese noren with kanbei written in Japanese kanji"
          />
          <img
            src="/public/images/home/home-2.png"
            alt="protrait shot of the shop owner smiling"
          />
          <img
            src="/public/images/home/home-3.png"
            alt="a set meal with black and white udon, shrimp tempura"
          />
        </div>

        <p className="tagline-primary">
          Serving hearty meal to the Kasuya community since Showa 52 (1977)
        </p>

        <Link to="/about" className="button-primary">
          <span>About Kanbei Udon</span>
        </Link>
      </section>

      <section className="specialty-section">
        <h1>Our Specialty</h1>
        {specialityHTML}
        <h4 className="tagline-secondary">
          The dashi stock we use are made from scratch each morning without any
          chemical additives.
        </h4>
      </section>

      <section className="popular-dish-section">
        <h1>Popular Selections</h1>
        <div className="popular-dish-grid">{popularDishHTML}</div>

        <Link to="/menu" className="button-primary">
          <span>Menu</span>
        </Link>
      </section>
    </main>
  );
}
