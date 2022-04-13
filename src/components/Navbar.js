import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img className="logo" src="../images/globe.png" alt="Globe logo" />
      <h1>my travel journal.</h1>
    </nav>
  );
}
