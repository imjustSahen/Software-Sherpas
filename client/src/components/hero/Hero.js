import React, { useState, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import background1 from "../../assets/BGimages/Micbg.jpg";
import background2 from "../../assets/BGimages/ampBG.jpg";
import background3 from "../../assets/BGimages/deckBG.jpg";
import background4 from "../../assets/BGimages/mic2BG.jpg";
import logo1 from "../../assets/logos/nobgtape.png";
import "./hero.css";

const backgrounds = [background1, background2, background3, background4];

// Define a GraphQL mutation to sign up a user
const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $isArtist: Boolean!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      isArtist: $isArtist
    ) {
      id
      firstName
      lastName
      email
      isArtist
    }
  }
`;

// Define a GraphQL mutation to log in a user
const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// Define a functional component called "Hero"
function Hero({ handlePageChange }) {
  // Define state variables using the "useState" hook
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  // Use the "useMutation" hook to execute the "SIGNUP_MUTATION" mutation
  const [signup] = useMutation(SIGNUP_MUTATION, {
    // Define a function to run when the mutation is completed
    onCompleted: (data) => {
      console.log(data.signup.id);
      // Update your component state here if necessary
    },
  });

  // Use the "useMutation" hook to execute the "LOGIN_MUTATION" mutation
  const [login] = useMutation(LOGIN_MUTATION, {
    // Define a function to run when the mutation is completed
    onCompleted: (data) => {
      console.log(data.login.token);
      // Update your component state here if necessary
    },
  });

  // Use the "useEffect" hook to change the background image every 15 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (backgroundIndex) => (backgroundIndex + 1) % backgrounds.length
      );
    }, 15000);
    return () => clearInterval(intervalId);
  }, []);

  // Get the current background image based on the current index
  const currentBackground = backgrounds[backgroundIndex];

  // Define event handler functions
  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const handleModalClose = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const isArtist = event.target.elements.isArtist.checked;
    try {
      // Execute the "signup" mutation with the form data
      await signup({
        variables: { firstName, lastName, email, password, isArtist },
      });
      // Hide the sign-up modal and show the login modal
      setShowSignupModal(false);
      setShowLoginModal(true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => {
      handlePageChange("home");
    }, 1000);
  };

  return (
    <div
      // Set the background image of the div to currentBackground variable
      className="hero"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <a href="#home" onClick={handleLogoClick}>
        <img
          // Display the logo1 image
          src={logo1}
          alt="Logo"
          // Add the "logo-clicked" class to the img tag if logoClicked state is true
          className={`logo ${logoClicked ? "logo-clicked" : ""}`}
        />
      </a>
      <div className="button-container">
        <button
          // Call handleLoginClick function when the button is clicked
          className="login-signup-button"
          onClick={handleLoginClick}
        >
          Log In
        </button>
        {/* <button
          // Call handleSignupClick function when the button is clicked
          className="login-signup-button"
          onClick={handleSignupClick}
        >
          Sign Up
        </button> */}
      </div>
      {/* Show the login modal if showLoginModal state is true */}
      {showLoginModal && (
        <div className="modal login-modal">
          <h2>Log In</h2>
          <form className="modal-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Log In</button>
          </form>
          {/* Call handleSignupClick function when the button is clicked */}
          <button onClick={handleSignupClick} className="signup-button">
            Sign Up
          </button>
          {/* Call handleModalClose function when the button is clicked */}
          <button onClick={handleModalClose} className="close-button">
            Close
          </button>
        </div>
      )}
      {/* Show the signup modal if showSignupModal state is true */}
      {showSignupModal && (
        <div className="modal signup-modal">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignupSubmit} className="modal-form">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
            <label htmlFor="isArtist">Are you an artist?</label>
            <input type="checkbox" id="isArtist" name="isArtist" />
            <button type="submit">Sign Up</button>
          </form>
          {/* Call handleLoginClick function when the button is clicked */}
          <button onClick={handleLoginClick} className="login-button">
            Log In
          </button>
          {/* Call handleModalClose function when the button is clicked */}
          <button onClick={handleModalClose} className="close-button">
            Close
          </button>
        </div>
      )}
    </div>
  );
}
export default Hero;
