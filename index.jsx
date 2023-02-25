import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <nav>
        
          <Link to="/">
            <img src="./images/home.svg" alt="icon of a home" />
            <span>Home</span>
          </Link>
        
        
          <Link to="/menu">
            <img src="./images/menu.svg" alt="icon of a menu" />
            <span>Menu</span>
          </Link>
        
        
          <Link to="/about">
            <img src="./images/about.svg" alt="icon of an info icon" />
            <span>About</span>
          </Link>
        
        
          <Link to="/access">
            <img src="./images/access.svg" alt="icon of a location pin" />
            <span>Access</span>
          </Link>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/access" element={<Access />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return (
    <main>
      <section className="landing-page">
        <h1 className="shop-name">Kanbei Udon</h1>
        <p className="tagline-primary upper">
          A beloved udon shop along the streets of Kasuya, Fukuoka
        </p>
        <div className="landing-page-images-grid">
          <img src="./images/home/home-1.png" alt="" />
          <img src="./images/home/home-2.png" alt="" />
          <img src="./images/home/home-3.png" alt="" />
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

function Menu(){
  return (
    <h1>Our Offering</h1>
  )
}

function About(){
  return (
    <h1>About Kanbei Udon</h1>
  )
}
function Access(){
  return (
    <h1>Where is Kanbei Udon?</h1>
  )
}

ReactDOM.createRoot(document.getElementById("root"))
        .render(<App />);