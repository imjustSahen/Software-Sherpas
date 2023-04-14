import React from "react";
import Artist1 from "../assets/images/TFMarz-2.jpg";
import Artist2 from "../assets/images/keramel-2.JPEG";
import CrowdImage from "../assets/BGimages/crowdpic.png";
import "./home.css";

function HomePage() {
  const artistList = [
    {
      name: "TFMarz",
      imgSrc: Artist1,
    },
    {
      name: "Keramel",
      imgSrc: Artist2,
    },
  ];

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
        <div className="featured-artist-container">
          <h1 className="featured-artist">Featured Artists</h1>
        </div>
        <div className="images-container">
          {artistList.map((artist, index) => (
            <div className="sherpa-image-container" key={index}>
              <img
                src={artist.imgSrc}
                alt={artist.name}
                className="sherpa-image"
              />
              <div className="overlay">
                <div className="overlay-text">{artist.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
