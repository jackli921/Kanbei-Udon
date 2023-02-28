import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Access from "./pages/Access";
import ItemDetails from "./pages/ItemDetails";

import Layout from './components/Layout'
import MenuLayout from './components/MenuLayout'

import Set from './pages/Menu/Set'
import Special from './pages/Menu/Special'
import Single from './pages/Menu/Single'
import Side from './pages/Menu/Side'
import Notice from "./pages/Menu/Notice";

function App() {

  function fixNav(){
    const nav = document.getElementById("top-nav");
    const main = document.querySelector(".main");
    const topOfNav = nav.offsetTop;

    if(window.scrollY > 0){
      main.style.paddingTop = nav.topOfNav
      nav.classList.add('fixed-nav')
    }
    else{
      main.style.paddingTop = 0
      nav.classList.remove('fixed-nav')
    }
  }

window.addEventListener('scroll', fixNav)

// scroll to top 
  const handleScroll = () => {
    const scrollButton = document.querySelector(".scroll-to-top");
    if (window.pageYOffset > 200) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  };

  window.addEventListener("scroll", handleScroll);


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="menu" element={<MenuLayout />}>

            <Route index element={<Notice />} />
            <Route path="set" element={<Set />} />
            <Route path="special" element={<Special />} />
            <Route path="single" element={<Single />} />
            <Route path="side" element={<Side />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/access" element={<Access />} />
          <Route path="/menu/:id" element={<ItemDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
