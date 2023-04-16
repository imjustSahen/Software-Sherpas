import React from "react";
import "./Nav.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import LoginModal from "../loginModal/Login";
import SignUpModal from "../signupModal/Signup";

function Nav({ Signup, Login }) {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="header__nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
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
            {/* <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
          </div>
          <ul className="navbar">
            <li className="nav-item">
              <Link to="/aboutUs">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactUs">Contact</Link>
            </li>
            {/* <li className="nav-item">
              <SignUpModal />
            </li> */}
            {/* <li className="nav-item">
              <LoginModal />
            </li> */}
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
