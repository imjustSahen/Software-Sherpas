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

  const handleSubmit = (event) => {
    event.preventDefault();
    // form validation
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
    // handle form submission
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
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <br />
        <label>
          Is Artist:
          <input
            type="checkbox"
            checked={isArtist}
            onChange={handleIsArtistChange}
          />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Sign Up"}
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
}
export default SignUpModal;
