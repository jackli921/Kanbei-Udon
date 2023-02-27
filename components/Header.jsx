import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'


export default function Header(){
    return (
      <header>
        <nav className="top-nav" id="top-nav">
          <Link to="/">
            <img src="/images/home.svg" alt="icon of a home" />
            <span>Home</span>
          </Link>

          <Link to="/menu">
            <img src="/images/menu.svg" alt="icon of a menu" />
            <span>Menu</span>
          </Link>

          <Link to="/about">
            <img src="/images/about.svg" alt="icon of an info icon" />
            <span>About</span>
          </Link>

          <Link to="/access">
            <img src="/images/access.svg" alt="icon of a location pin" />
            <span>Access</span>
          </Link>
        </nav>
      </header>
      
    );
}