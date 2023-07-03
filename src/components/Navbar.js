import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ brandName, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-brand" onClick={toggleMenu}>
        <span>{brandName}</span>
      </div>
      <ul className={`nav-items ${isMenuOpen ? "menu-open" : ""}`}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className="nav-item"
          >
            <Link className={`nav-item ${location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "nav-item-active" : ""}`} to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <button className={`hamburger-button ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Navbar;
