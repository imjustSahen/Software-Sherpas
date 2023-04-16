import React from "react";
// import Artist1 from "../assets/images/TFMarz-2.jpg";
// import Artist2 from "../assets/images/keramel-2.JPEG";
// import CrowdImage from "../assets/logos/CrowdLogo.png";
import "./home.css";
import ArtistList from "../components/artistList/artistList";
import Hero from "../components/Hero/Hero";
import { useQuery } from "@apollo/client";
import { GET_ARTISTS } from "../utils/queries";

const HomePage = () =>  {

  const {loading, data} = useQuery(GET_ARTISTS);
  console.log(data);

  const artists = data?.artists || [];
  console.log(artists);

  return (
    <div>
      <Hero />
      {/* <div className="header-image-container">
        <img src={CrowdImage} alt="Crowd" className="header-image" />
      </div> */}
      <div className="container">
        <div className="title-container">
          <h1 className="title">WE ARE THE SHERPAS</h1>
        </div>
        <div className="description-container">
          <p className="description">
            Welcome to The Sherpa Studios, a music label dedicated to carrying
            local artists to the top. We're based out of the Pacific Northwest
            and our mission is to provide a platform for talented musicians to
            showcase their work, connect with new fans, and grow their careers.
            We believe that music has the power to bring people together and
            inspire positive change, and we're committed to fostering a vibrant
            and inclusive music community that celebrates diversity and
            creativity. As a Sherpa, we'll be with you every step of the way on
            your musical journey, providing guidance, support, and resources to
            help you succeed. Whether you're a singer-songwriter, a rapper, or a
            producer, we invite you to join our community and share your unique
            sound with the world. Thank you for visiting The Sherpa Studios. We
            can't wait to hear what you create.
          </p>
        </div>
        <div className="featured-artist-container">
          <h1 className="featured-artist">Featured Artists</h1>
        </div>
        <div className="images-container">
        
          {loading ? (<div>Loading...</div>) :
            <ArtistList 
              artists={artists} 
            />
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;
