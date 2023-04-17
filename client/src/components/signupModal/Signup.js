import React, { useState } from "react";
import { useMutation } from "@apollo/client"; // import the useMutation hook from Apollo Client
import { ADD_USER } from "../../utils/mutations"; // import the ADD_USER mutation
import "./signup.css";

function SignUpModal(props) {
  // Define state variables for user, confirmPassword, and the addUser mutation
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    artist: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  // Define a function to handle input changes and update the user state
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Define a function to handle form submissions
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      alert("Please fill out all fields."); // show an alert if required fields are missing
      return;
    }
    if (user.password !== confirmPassword) {
      alert("Passwords do not match."); // show an alert if passwords do not match
      return;
    }
    if (user.password.length < 6) {
      alert("Password must be at least 6 characters."); // show an alert if password is too short
      return;
    }
    console.log("user", user);
    // Call the addUser mutation with the user state as the input variable
    addUser({
      variables: {
        input: user,
      },
    })
      .then((result) => {
        // Handle the result if needed
        console.log(result);
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  };

  // Define a function to close the modal
  const handleClose = () => {
    props.onClose(); // Call the onClose function passed in as a prop
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sign up</h2>
        {error && <p>Error signing up</p>}
        <form className="modal-form">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            className="modal-input"
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            className="modal-input"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="modal-input"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            className="modal-input"
          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="modal-input"
          />
          <label htmlFor="artist">Are you an artist?</label>
          <input
            type="checkbox"
            id="artist"
            name="artist"
            checked={user.artist}
            onChange={handleInputChange}
            className="modal-input"
          />
          <div className="button-container">
            <div className="button-row">
              <button
                type="submit"
                onClick={handleSubmit}
                className="modal-button"
              >
                Sign up
              </button>
              <button onClick={handleClose} className="modal-button">
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
