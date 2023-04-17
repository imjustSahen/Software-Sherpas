import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import "./signup.css";

function SignUpModal(props) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    artist: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      alert("Please fill out all fields.");
      return;
    }
    if (user.password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (user.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    console.log("user", user);
    addUser({
      variables: {
        input: user,
      },
    })
      .then((result) => {
        // do something with the result if needed
        console.log(result);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const handleClose = () => {
    props.onClose(); // changed from props.setShowModal(false)
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
