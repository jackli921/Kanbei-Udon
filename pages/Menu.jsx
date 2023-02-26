import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Menu() {
  return (
    <main className="main">
        
      <Outlet />
    </main>
  );
}
