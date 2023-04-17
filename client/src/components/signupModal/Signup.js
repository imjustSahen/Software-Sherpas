import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

function SignUpModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isArtist, setIsArtist] = useState(false);

  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleIsArtistChange = (event) => {
    setIsArtist(event.target.checked);
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    addUser({
      variables: {
        firstName,
        lastName,
        email,
        password,
        artist: isArtist,
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
    props.setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-form">
        <h2>Sign Up</h2>

        <form>
          <label>
            First Name:
            <input
              className="input-field"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              className="input-field"
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <br />
          <label>
            Email:
            <br />
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              className="input-field"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </label>
          <br />
          <label>
            Are you an Artist:
            <input
              className="checkbox-field"
              type="checkbox"
              checked={isArtist}
              onChange={handleIsArtistChange}
            />
          </label>
          <br />
          <div className="button-container">
            <div className="button-row">
              <button className="close-button" onClick={handleClose}>
                Close
              </button>
              <button
                className="submit-button"
                type="button"
                disabled={loading}
                onClick={handleSignUp}
              >
                {loading ? "Submitting..." : "Sign Up"}
              </button>
            </div>
          </div>
          {error && <p>Error: {error.message}</p>}
        </form>
      </div>
    </div>
  );
}
export default SignUpModal;
