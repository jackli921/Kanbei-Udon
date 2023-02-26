import React from "react";
import {Link, Outlet} from 'react-router-dom'

export default function MenuLayout() {
  return (
    <>
      <h1>Host Layout</h1>
      <nav>
        <Link to="/menu/set">Teishoku Set</Link>
        <Link to="/menu/special">Special Items</Link>
        <Link to="/menu/single">Single Items</Link>
        <Link to="/menu/side">Side Dishes</Link>
      </nav>
      <Outlet />
      
    </>
  );
}
