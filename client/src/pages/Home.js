import React from "react";
import Artist1 from "../assets/images/TFMarz-2.jpg";
import Artist2 from "../assets/images/keramel-2.JPEG";
import CrowdImage from "../assets/BGimages/crowdpic.png";
import "./home.css";
function HomePage() {
  return (
    <div>
      <div className="header-image-container">
        <img src={CrowdImage} alt="Crowd" className="header-image" />
      </div>
      <div className="container">
        <div className="title-container">
          <h1 className="title">WE ARE THE SHERPAS</h1>
        </div>
        <div className="description-container">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            euismod velit nec purus faucibus bibendum. Aliquam erat volutpat.
            Nulla vitae ipsum tincidunt, ultrices lorem vel, aliquet lacus.
          </p>
        </div>
        <div classname="featured artist-container">
          <h1 className="featured-artist">Featured Artists</h1>
        </div>
        <div className="images-container">
          <div className="sherpa-image-container">
            <img src={Artist1} alt="Sherpa 1" className="sherpa-image" />
          </div>
          <div className="sherpa-image-container">
            <img src={Artist2} alt="Sherpa 2" className="sherpa-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
