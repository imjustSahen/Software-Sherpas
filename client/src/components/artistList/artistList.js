import React from "react";
import { Link } from 'react-router-dom'
// import KeramelThumb from '../../assets/images/keramel-2.JPEG'
// import TFthumb from '../../assets/images/TFMarz-2.jpg'


const ArtistList = ({artists, }) => {


    if (!artists.length) {
        return <h4>Artists coming soon!</h4>
    }


    console.log(artists.firstName);
  
// client/public/image/keramel-2.JPEG
    return (
        <div className="images-container" >
            {artists && artists.map((artist) => (
                <div key={artist._id}>
                <Link to={`/artist/${artist.artistName}`} >
                    <div className="sherpa-image-container" >
                        <div>{artist.firstName}</div>
                    </div>
                </Link>
               <img src={`/images/${artist.secondaryImage}`} alt={artist.secondaryImage}></img>
                </div>
            ))}

        </div>
    )
}

export default ArtistList;