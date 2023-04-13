import React from "react";
import "./navbar.css";

const Navbar = ({ handlePageChange }) => {
  return (
    <div className="navbar">
      <h1>My App</h1>
      <nav>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <button
              className="header__nav-button"
              onClick={() => handlePageChange("aboutUs")}
            >
              About Us
            </button>
          </li>
          <li className="header__nav-item">
            <button
              className="header__nav-button"
              onClick={() => handlePageChange("contactUs")}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
