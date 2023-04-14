import React from "react";
import "./index.css";

function aboutUs() {

    return (
        <div className="about">
            <h1>About Us</h1>
            <img src={'client/src/assets/logos/sherpa-cassette.png'} alt='logo pic' className='logoPic' />
            <div id="about-text">Sherpa Records is a new independent record label that is dedicated to providing a platform for the most talented and innovative artists in the music industry. Our mission is to discover, nurture, and promote the best up-and-coming musicians, helping them to reach a wider audience and achieve their full potential. We believe that music has the power to inspire, unite, and heal, and we are committed to supporting artists who share this vision. At Sherpa Records, we value creativity, authenticity, and collaboration, and we are constantly pushing the boundaries of what is possible in the music industry. Whether you are an artist looking for a home for your music, or a fan searching for the next big thing, Sherpa Records is here to guide you on your journey.</div>
        </div >
    );

}

export default aboutUs;