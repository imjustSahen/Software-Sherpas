import React from "react";
import { Link } from 'react-router-dom'

const ArtistList = ({artists}) => {
    console.log(artists.length)

    if (!artists.length) {
        return <h4>Artists coming soon!</h4>
    }
 
    return (
        <div className="images-container" >
            {artists && artists.map((artist) => (
                <div key={artist._id } className="artist-box">
                    <Link to={`/artist/${artist._id}`} description={artist.description}>
                            
                        <img src={`/images/${artist.thumbnailImg}`} alt={artist.secondaryImage} className="image-box"></img>

                        <div className="middle">
                            <div>
                            {artist.artistName}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
    )
}

export default ArtistList;