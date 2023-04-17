import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../utils/queries";

import "./keramel.css"


const Artist = () => {
  const { userId } = useParams();
  console.log(userId)

  const [currentUserId, setCurrentUserId] = useState(false);

  useEffect(() => {
    setCurrentUserId({userId});
  }, [userId]);

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { userId },
  });

  console.log({data})

  const artist = data?.user || {};
  // console.log(artist);

  if(error){
    return console.log(error)
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the artist page with artist-specific data and color scheme
  return (
    <div className="artist-body">
        {/* {currentUserId === '643b933f17dc8c7e7bb47408' && <link rel="stylesheet" href={keramel} />}
        {currentUserId === '643b933f17dc8c7e7bb4740a' && <link rel="stylesheet" href={tfmarz} />}   */}
      <div className="vid-hero">
        <video  src={`/images/${artist.heroImage}`} type="video/mp4" alt="Video Background" muted
            autoPlay preload="auto"></video>

      </div>

      <h1 className="artist-name">{artist.artistName}</h1>

      <section className="artist-about-box">
        <img src={`/images/${artist.secondaryImage}`} type="jpg" alt="Keramel" className="secondary-image"></img>
        <div className="artist-hero-2">

        </div>

        <div className="artist-description">
            {artist.artistDescription}

          <h3 className="artist-booking"><a href="mailto: keramel@gmail.com">Book {artist.artistName}</a></h3>
          <div className="artist-socials">
            <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer"><i
              className="fa fa-instagram fa-lg"></i></a>
            <a href={artist.spotifyUrl} target="_blank" rel="noopener noreferrer"><i
              className="fa fa-spotify fa-lg"></i></a>
            <a href={artist.soundcloudUrl} target="_blank" rel="noopener noreferrer"><i
              className="fa fa-soundcloud fa-lg;"></i></a>
          </div>
        </div>

      </section>

      <section className="spotify-contact-box">
        <div className="spotify-ui">
          Spotify UI
        </div>
      </section>

      <section>
        Event Component
      </section>
    </div>
  );
}

export default Artist;
