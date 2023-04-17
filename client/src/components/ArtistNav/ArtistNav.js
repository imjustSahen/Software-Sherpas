import React from "react";
import { Link } from "react-router-dom";

const ArtistNav = ({ artists }) => {
  console.log(artists.length);

  if (!artists.length) {
    return <h4>Artists coming soon!</h4>;
  }

  return (
    <>
      {artists &&
        artists.map((artist) => (
          <Link
            key={artist._id}
            to={`/artist/${artist._id}`}
            description={artist.description}
          >
            {artist.artistName}
          </Link>
        ))}
    </>
  );
};

export default ArtistNav;
