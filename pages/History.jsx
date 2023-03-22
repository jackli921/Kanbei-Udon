import React from "react"
import { Link } from "react-router-dom";


export default function About() {
  return (
    <main className="main">
      <section className="video">
        <h1> The Story of Kanbei Udon</h1>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/NvYKmCvHW7g"
          title="The Story of Kanbei Udon"
          frameBorder="0"
        ></iframe>
      </section>

      <hr />
      <h1> Where It All Began</h1>

      <section className="about-section">
        <div className="about-section-image-container">
          <img src="/images/about/about-2.png" alt="" />
          <img src="/images/about/about-1.png" alt="" />
        </div>

        <article className="about-article-1">
          <h3>Mr.Ogawa & Kanbei Udon Shop</h3>
          <p>
            Born in the 50s, Mr.Ogawa grew up in a working class family where he
            started working at an young age. One of his job was at an udon shop.{" "}
          </p>
        </article>
      </section>

      <hr />

      <section className="about-section">
        <img src="/images/about/about-3.png" alt="" />
        <h3>Kanbei Udon in 1975</h3>
        <p>
          Mr.Ogawa opened Kanbei Udon in 1975; A year after graduating from
          college. He says, "back then, I had no idea how to properly make udon
          by hand, so everyday was all trial-and error".{" "}
        </p>
      </section>

      <hr />

      <section className="about-section">
        <img src="/images/about/about-4.png" alt="" />
        <h3>Mr.Ogawa & Rob</h3>
        <p>
          When business was going south because of competition, Mr.Ogawa met Rob
          and invited him to work at Kanbei. Rob agreed and has been a part
          Kanbei ever since. Rob is now the udon master.
        </p>
      </section>

      <hr />

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

      <section className="timeline-section">
        <h2>Kanbei Udon's Timeline</h2>

        <div className="timeline-event-container">
          <img src="/images/about/about-6.png" alt="" />
          <span>1977 - Kanbei Udon opens </span>
        </div>

        <div className="timeline-event-container">
          <span>1981 - The first store renovation</span>
        </div>

        <div className="timeline-event-container">
          <span>
            1982 - Mr.Ogawa attends Self-Development "DMP" training at the
            Toyomura Institute
          </span>
        </div>

        <div className="timeline-event-container">
          <span>2005 - Store remodeling by Kyushu University students</span>
        </div>

        <div className="timeline-event-container">
          <span>2008 - Rob from the U.S. joins Kanbei Udon</span>
        </div>

        <div className="timeline-event-container">
          <span>
            2009 - begin serving "black udon", udon noodles with bamboo charcoal
          </span>
        </div>

        <div className="timeline-event-container">
          <span>2022 - Yuichi from Bolivia joins Kanbei Udon</span>
        </div>
      </section>
    </main>
  );
}