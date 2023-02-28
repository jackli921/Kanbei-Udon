import React from "react"
import { Link } from "react-router-dom";


export default function About() {
  return (
    <main className="main">
      <h1> Where It All Began</h1>

      <section className="about-section">
        <div className="about-section-image-container">
          <img src="/images/about/about-2.png" alt="" />
          <img src="/images/about/about-1.png" alt="" />
        </div>

        <h3>Mr.Ogawa & Kanbei Udon Shop</h3>
        <p>
          Born in the 50s, Mr.Ogawa grew up in a working class family where he
          started working at an young age. One of his many job was at an udon
          shop.{" "}
        </p>
      </section>

      <section className="about-section">
        <img src="/images/about/about-3.png" alt="" />
        <h3>Kanbei Udon in 1975</h3>
        <p>
          Mr.Ogawa opened Kanbei Udon in 1975; A year after graduating from
          college. He says, "back then, I had no idea how to properly make udon
          by hand, so everyday was all trial-and error".{" "}
        </p>
      </section>

      <section className="about-section">
        <img src="/images/about/about-4.png" alt="" />
        <h3>Mr.Ogawa & Rob</h3>
        <p>
          When business was going south because of competition, Mr.Ogawa met Rob
          and invited him to work at Kanbei. Rob agreed and has been a part
          Kanbei ever since. Rob is now the udon master.
        </p>
      </section>

      <section className="about-section">
        <img src="/images/about/about-5.png" alt="" />
        <h3>Kanbei Udon Staff</h3>
        <p>
          Lots of people have worked at Kanbei, some were local international
          residents. Everyone feels welcomed at Kanbei. It's truly a beloved
          place in the community.
        </p>
      </section>
      <hr />
      <br />

      <section className="about-section timeline-section">
        <h1>Kanbei Udon's Timeline</h1>
        <img src="/images/about/about-6.png" alt="" />

        <span>First Opened in 1977</span>

        <div className="timeline-event-container">
          <h3>Major Event</h3>
          <h3>19xx</h3>
        </div>
        <div className="timeline-event-container">
          <h3>Major Event</h3>
          <h3>19xx</h3>
        </div>
        <div className="timeline-event-container">
          <h3>Major Event</h3>
          <h3>19xx</h3>
        </div>
        <div className="timeline-event-container">
          <h3>Major Event</h3>
          <h3>19xx</h3>
        </div>
      </section>
    </main>
  );
}