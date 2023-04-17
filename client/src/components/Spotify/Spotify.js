import React from "react";
import PlayWidget from "react-spotify-widgets";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../utils/queries";

function Spotify() {
  const { userId } = useParams();
  console.log(userId)

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {

    variables: { userId },
  });

  console.log({data})

  const artist = data?.user || {};

  return (
    <div className="App">
      <PlayWidget
        className="p-10 bg-red-700"
        width={300}
        height={500}
        uri={`spotify:artist:${artist.spotifyId}:top-tracks`}
        lightTheme={true}
        showCoverArt={true}
      />
    </div>
  );
}

export default Spotify;