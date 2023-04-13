import React, { useState, useEffect } from "react"; // Importing React and the hooks we need
import background1 from "../../assets/BGimages/Micbg.jpg"; // Importing images to use as backgrounds
import background2 from "../../assets/BGimages/ampBG.jpg";
import background3 from "../../assets/BGimages/deckBG.jpg";
import background4 from "../../assets/BGimages/mic2BG.jpg";
import logo1 from "../../assets/logos/nobgtape.png";
import "./hero.css";

const backgrounds = [background1, background2, background3, background4]; // Putting all of the background images into an array

function Hero({ handlePageChange }) {
  // Defining the Landing component and passing in a function called handlePageChange
  const [backgroundIndex, setBackgroundIndex] = useState(0); // Using the useState hook to create a state variable for the background index, which starts at 0

  useEffect(() => {
    // Using the useEffect hook to run some code when the component mounts and unmounts
    const intervalId = setInterval(() => {
      // Setting an interval that changes the background index every 15 seconds
      setBackgroundIndex(
        (backgroundIndex) => (backgroundIndex + 1) % backgrounds.length
      );
    }, 15000);
    return () => clearInterval(intervalId); // Cleaning up the interval when the component unmounts
  }, []);

  const currentBackground = backgrounds[backgroundIndex]; // Getting the current background image based on the current index

  const handleClick = () => {
    // Defining a function to run when the user clicks the button
    handlePageChange("aboutUs"); // Calling the handlePageChange function that was passed in as a prop with an argument of "aboutUs"
  };

  return (
    // Returning JSX that displays the current background image, the logo, and a button that triggers handleClick when clicked
    <div
      className="hero"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <img src={logo1} alt="Logo" className="logo" />
      <button className="login-signup-button" onClick={handleClick}>
        Enter/Signup
      </button>
    </div>
  );
}

export default Hero; // Exporting the Landing component so it can be used in other parts of the app
