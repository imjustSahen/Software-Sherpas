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
            Welcome to The Sherpa Studios, a music label dedicated to supporting
            local artists based out of the Pacific Northwest. Our goal is to
            provide a platform for talented musicians to showcase their work,
            connect with new fans, and grow their careers. At The Sherpa
            Studios, we believe in the power of music to bring people together
            and inspire positive change. We are committed to fostering a vibrant
            and inclusive music community that celebrates diversity and
            creativity. Whether you're a singer-songwriter, a rapper, or a
            producer, we invite you to join our community and share your unique
            sound with the world. With a team of experienced professionals and a
            passion for great music, we're here to help you succeed. Thank you
            for visiting The Sherpa Studios. We can't wait to hear what you
            create.
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
