import React from "react";
import ContactCard from "../components/contactcard/ContactCard";

function About() {
  return (
    <div className="about-section">
      <h1>About</h1>
      <img
        src={'./assets/logos/sherpa-cassette.png'}
        alt="logo pic"
        className="logoPic"
      />
      <div id="about-text">
        Sherpa Records is a new independent record label that is dedicated to
        providing a platform for the most talented and innovative artists in the
        music industry. Our mission is to discover, nurture, and promote the best
        up-and-coming musicians, helping them to reach a wider audience and
        achieve their full potential. We believe that music has the power to
        inspire, unite, and heal, and we are committed to supporting artists who
        share this vision. At Sherpa Records, we value creativity, authenticity,
        and collaboration, and we are constantly pushing the boundaries of what
        is possible in the music industry. Whether you are an artist looking for
        a home for your music, or a fan searching for the next big thing, Sherpa
        Records is here to guide you on your journey.
      </div>
      <div className="contact-section">
        <h2>Meet the Team</h2>
        <div className="contact-cards">
          <ContactCard
            name="Sahen Alexander"
            Github="https://github.com/imjustSahen"
            email="imjustsahen@gmail.com"
          />
          <ContactCard
            name="Matthew Delgado"
            Github="https://github.com/DelgaMatt"
            email="matthewrdelgado@gmail.com"
          />
          <ContactCard
            name="Wyatt Domanski"
            Github="https://github.com/wyamet"
            email="Wyattdomanski.md@gmail.com"
          />
          <ContactCard
            name="Sam Jensen"
            Github="https://github.com/Samualjensen"
            email="samual.jensen@gmail.com"
          />
          <ContactCard
            name="Julieta Ramirez Solis Nguyen"
            Github="https://github.com/justjulieta"
            email="julieta.ramirez27@gmail.com"
          />
        </div>
      </div>      
    </div>
  );
}

export default About;
