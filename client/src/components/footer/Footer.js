import React from "react";
import "./footer.css";

const Footer = ({ handlePageChange }) => {
  return (
    <div className="footer">
      <h1>Sherpa Records</h1>
      <nav>
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <button className="footer__nav-button" onClick={() => handlePageChange("shop")}>
              Shop
            </button>
          </li>
          <li className="footer__nav-item">
            <button className="footer__nav-button" onClick={() => handlePageChange("artists")}>
              Artists
            </button>
          </li>
          <li className="footer__nav-item">
            <button className="footer__nav-button" onClick={() => handlePageChange("aboutUs")}>
              About
            </button>
            <li className="footer__nav-item">
            <button className="footer__nav-button" onClick={() => handlePageChange("contactUs")}>
              Contact
            </button>
          </li>
          <li className="footer__nav-item">
            <button className="footer__nav-button" onClick={() => handlePageChange("login")}>
              Login
            </button>
          </li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;