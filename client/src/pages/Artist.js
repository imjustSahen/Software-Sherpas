import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTIST } from "../queries";

function Artist() {
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_ARTIST, {
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const artist = data.artist;

  // Render the artist page with artist-specific data and color scheme

  return (
    <div>
      <h1>{artist.name}</h1>
      <img src={artist.image} alt={artist.name} />
      <p>{artist.bio}</p>
      {/* Other artist-specific data */}
    </div>
  );
}

export default Artist;
