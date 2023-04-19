import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth"
import { Link } from "react-router-dom"
import "./login.css";

function LoginModal(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
      variables: { ...formState },
      });

      console.log( { data } );
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });

  }
    const handleClose = () => {
      props.setShowModal(false);
    };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        {error && <p>Error logging in</p>}
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <form onSubmit={handleFormSubmit}>
          <label>
            Email:
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </label>
          <div className="button-container">
            <div className="button-row">
              <button type="submit" onClick={handleFormSubmit}>
                Login
              </button>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
