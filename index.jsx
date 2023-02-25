import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Access from './pages/Access'

function App() {
  return (
    <BrowserRouter>
      <nav>
        
          <Link to="/">
            <img src="./src/assets/images/home.svg" alt="icon of a home" />
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



ReactDOM.createRoot(document.getElementById("root"))
        .render(<App />);