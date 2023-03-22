import React, { PureComponent } from 'react'
import {NavLink} from 'react-router-dom'


export default function Header(){
    return (
      <header>
        <nav className="top-nav" id="top-nav">
          <div className="shop-name-on-header shop-name">
            <NavLink className="no-color" to="/">Kanbei Udon</NavLink>
          </div>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/"
          >
            <img src="/images/home.svg" alt="icon of a home" />
            <span>Home</span>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/menu"
          >
            <img src="/images/menu.svg" alt="icon of a menu" />
            <span>Menu</span>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/history"
          >
            <img src="/images/history.svg" alt="icon of an info icon" />
            <span>History</span>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/location"
          >
            <img src="/images/location.svg" alt="icon of a location pin" />
            <span>Location</span>
          </NavLink>
        </nav>
      </header>
    );
}