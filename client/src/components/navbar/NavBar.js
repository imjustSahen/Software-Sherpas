import React from "react";
import "./navbar.css";

const Navbar = ({ handlePageChange }) => {
  return (
    <div className="navbar">
      <h1>Sherpa Records</h1>
      <nav>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <button className="header__nav-button" onClick={() => handlePageChange("aboutUs")}>
              Shop
            </button>
          </li>
          <li className="header__nav-item">
            <button className="header__nav-button" onClick={() => handlePageChange("contactUs")}>
              Artists
            </button>
          </li>
          <li className="header__nav-item">
            <button className="header__nav-button" onClick={() => handlePageChange("contactUs")}>
              About Us
            </button>
            <li className="header__nav-item">
            <button className="header__nav-button" onClick={() => handlePageChange("contactUs")}>
              Contact Us
            </button>
          </li>
          <li className="header__nav-item">
            <button className="header__nav-button" onClick={() => handlePageChange("contactUs")}>
              Login/Sign Up
            </button>
          </li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
