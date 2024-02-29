import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar">
      <div className="hamburger-menu" onClick={toggleMenu}>
      <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#Home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#About" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#Skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#Portfolio" onClick={closeMenu}>
            My Work
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={closeMenu}>
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
