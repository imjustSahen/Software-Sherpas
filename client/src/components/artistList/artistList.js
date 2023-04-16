import React from "react";
import { Link } from 'react-router-dom'

const ArtistList = ({
    artists
}) => {
    if (!artists.length) {
        return <h4>Artists coming soon!</h4>
    }

    return (
        <div className="images-container">
            {artists && artists.map((artist) => (
                <Link to={`/artist/${artist.artistName}`}>
                    <div className="sherpa-image-container">
                        <div>{artist.firstName}</div>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default ArtistList;