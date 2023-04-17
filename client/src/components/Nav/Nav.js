import React, { useState } from "react";
import "./Nav.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import LoginModal from "../loginModal/Login";
import SignUpModal from "../signupModal/Signup";
import ArtistNav from "../ArtistNav/ArtistNav";

import { useQuery } from "@apollo/client";
import { GET_ARTISTS } from "../../utils/queries";

function Nav({ Signup, Login }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const { loading, data } = useQuery(GET_ARTISTS);
  console.log(data);

  const artists = data?.artists || [];
  console.log(artists);

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
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <ArtistNav artists={artists} />
                )}
              </div>
            </div>
          </div>
          <ul className="navbar">
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
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
