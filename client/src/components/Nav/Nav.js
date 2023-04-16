import React, { useState } from "react";
import "./Nav.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import LoginModal from "../loginModal/Login";
import SignUpModal from "../signupModal/Signup";

function Nav({ Signup, Login }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="header__nav-item">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="navbar-header">
          <div className="navbar">
            <div className="dropdown">
              <button className="dropbtn">Artists</button>
              <div className="dropdown-content">
                <Link to="/Keramel">Keramel</Link>
                <Link to="/TF-Marz">TF Marz</Link>
              </div>
            </div>
          </div>
          <ul className="navbar">
            <li className="nav-item">
              <Link to="/aboutUs">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactUs">Contact</Link>
            </li>
            <li className="nav-item">
              <button onClick={() => setShowSignUpModal(true)}>Sign Up</button>
              {showSignUpModal && (
                <SignUpModal onClose={() => setShowSignUpModal(false)} />
              )}
            </li>
            <li className="nav-item">
              <button onClick={() => setShowLoginModal(true)}>Log In</button>
              {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
              )}
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="navbar-header">
      <h1>
        <Link to="/">Software Sherpas</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
