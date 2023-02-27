import React, { PureComponent } from 'react'
import {NavLink} from 'react-router-dom'


export default function Header(){
    return (
      <header>
        <nav className="top-nav" id="top-nav">
          <NavLink className={({isActive})=> isActive? "active-link" : ""}to="/">
            <img src="/images/home.svg" alt="icon of a home" />
            <span>Home</span>
          </NavLink>

          <NavLink className={({isActive})=> isActive? "active-link" : ""}to="/menu">
            <img src="/images/menu.svg" alt="icon of a menu" />
            <span>Menu</span>
          </NavLink>

          <NavLink className={({isActive})=> isActive? "active-link" : ""}to="/about">
            <img src="/images/about.svg" alt="icon of an info icon" />
            <span>About</span>
          </NavLink>

          <NavLink className={({isActive})=> isActive? "active-link" : ""}to="/access">
            <img src="/images/access.svg" alt="icon of a location pin" />
            <span>Access</span>
          </NavLink>
        </nav>
      </header>

    );
}