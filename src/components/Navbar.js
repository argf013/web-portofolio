import React, { useState } from "react";
import PropTypes from "prop-types";
import Swal from 'sweetalert2'
import "../styles/Navbar.css";

const Navbar = ({ brandName, navItems, activeNavItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const notActive = () => {
    Swal.fire(
      'Under Development',
      'This feature is currently under development.',
      'info'
    );
    
  }

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-brand" onClick={toggleMenu}>
        <span>{brandName}</span>
      </div>
      <ul className={`nav-items ${isMenuOpen ? "menu-open" : ""}`}>
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={notActive}
            className={`nav-item ${activeNavItem === index ? "nav-item-active" : ""}`}
          >
            {item}
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
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeNavItem: PropTypes.number
};

export default Navbar;
