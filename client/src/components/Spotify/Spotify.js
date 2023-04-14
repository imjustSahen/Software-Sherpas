import React from "react";
import PlayWidget from "react-spotify-widgets";

function Spotify() {
  return (
    <div className="App">
      <PlayWidget
        className="p-10 bg-red-700"
        width={300}
        height={500}
        uri={"spotify:artist:1lCQ5s85YXUlfEOfesbcTD:top-tracks"}
        lightTheme={true}
        showCoverArt={true}
      />
    </div>
  );
}

export default Spotify;