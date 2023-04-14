import React, { useState, useEffect } from "react";
import background1 from "../../assets/BGimages/Micbg.jpg";
import background2 from "../../assets/BGimages/ampBG.jpg";
import background3 from "../../assets/BGimages/deckBG.jpg";
import background4 from "../../assets/BGimages/mic2BG.jpg";
import logo1 from "../../assets/logos/nobgtape.png";
import "./hero.css";

function Hero({ handlePageChange }) {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (backgroundIndex) => (backgroundIndex + 1) % backgrounds.length
      );
    }, 15000);
    return () => clearInterval(intervalId);
  }, []);

  const currentBackground = backgrounds[backgroundIndex];

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const handleModalClose = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => {
      handlePageChange("home");
    }, 1000);
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <a href="#" onClick={handleLogoClick}>
        <img
          src={logo1}
          alt="Logo"
          className={`logo ${logoClicked ? "logo-clicked" : ""}`}
        />
      </a>
      <div className="button-container">
        <button className="login-signup-button" onClick={handleLoginClick}>
          Log In
        </button>
        {/* <button className="login-signup-button" onClick={handleSignupClick}>
          Sign Up
        </button> */}
      </div>
      {showLoginModal && (
        <div className="modal">
          <h2>Log In</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Log In</button>
          </form>
          <button onClick={handleSignupClick}>Sign Up</button>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
      {showSignupModal && (
        <div className="modal">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <button onClick={handleLoginClick}>Log In</button>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
    </div>
  );
}

const backgrounds = [background1, background2, background3, background4];

export default Hero;
