import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Sherpa Records
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/shop" className="navbar-links">
              Shop
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/artists" className="navbar-links">
              Artists
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutus" className="navbar-links">
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contactus" className="navbar-links">
              Contact Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-links">
              Login/Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
