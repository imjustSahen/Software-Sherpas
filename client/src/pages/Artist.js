import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../utils/queries";

const Artist = () => {

  const { userId } = useParams();
  console.log(userId)

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
    <div>
      <div className="vid-hero">
        <video  src={`/images/${artist.heroImage}`} type="video/mp4" alt="Video Background" muted
            autoPlay preload="auto"></video>

      </div>

      <h1 class="artist-name">{artist.artistName}</h1>

      <section class="artist-about-box">
        <img src={`/images/${artist.secondaryImage}`} type="jpg" alt="Keramel"></img>
        <div class="artist-hero-2">

        </div>

        <div class="artist-description">
            {artist.description}

          <h3 class="artist-booking"><a href="mailto: keramel@gmail.com">Book {artist.artistName}</a></h3>
          <div class="artist-socials">
            <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer"><i
              class="fa fa-instagram"></i></a>
            <a href={artist.spotifyUrl} target="_blank" rel="noopener noreferrer"><i
              class="fa fa-spotify"></i></a>
            <a href={artist.soundcloudUrl} target="_blank" rel="noopener noreferrer"><i
              class="fa fa-soundcloud"></i></a>
          </div>
        </div>

      </section>

      <section class="spotify-contact-box">
        <div class="spotify-ui">
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
