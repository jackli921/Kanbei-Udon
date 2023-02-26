import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Access from "./pages/Access";
import ItemDetails from "./pages/ItemDetails";

import Layout from './components/Layout'

function App() {

  function fixNav(){
    const nav = document.querySelector(".nav");
    const main = document.querySelector(".main");
    const topOfNav = nav.offsetTop;

    if(window.scrollY > 1){
      main.style.paddingTop = nav.topOfNav
      nav.classList.add('fixed-nav')
    }
    else{
      main.style.paddingTop = 0
      nav.classList.remove('fixed-nav')
    }
  }

  window.addEventListener('scroll', fixNav)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/access" element={<Access />} />
          <Route path="/menu/:id" element={<ItemDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
