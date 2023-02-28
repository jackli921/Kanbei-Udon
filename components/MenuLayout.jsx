import React from "react";
import {NavLink, Outlet} from 'react-router-dom'

export default function MenuLayout() {
  return (
    <main className="main">
      <nav className="menu-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/menu/set"
        >
          Teishoku Set
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/menu/special"
        >
          Special Items
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/menu/single"
        >
          Single Items
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/menu/side"
        >
          Side Dishes
        </NavLink>
      </nav>
      <p>
        (As of now, we only accept <strong>cash</strong> 💵 )
      </p>
      <Outlet />
    </main>
  );
}
