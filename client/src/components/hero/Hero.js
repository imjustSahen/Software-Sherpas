import React, { useState, useEffect } from "react";
import background1 from "../../assets/BGimages/Micbg.jpg";
import background2 from "../../assets/BGimages/ampBG.jpg";
import background3 from "../../assets/BGimages/deckBG.jpg";
import background4 from "../../assets/BGimages/mic2BG.jpg";
import logo1 from "../../assets/logos/nobgtape.png";
import "./hero.css";

const backgrounds = [background1, background2, background3, background4];

function Hero({ handlePageChange }) {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

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
      <a href="#home" onClick={handleLogoClick}>
        <img
          src={logo1}
          alt="Logo"
          className={`logo1 ${logoClicked ? "clicked" : ""}`}
        />
      </a>
    </div>
  );
}

export default Hero;
