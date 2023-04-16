import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error }] = useMutation(LOGIN);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { email, password } });
      localStorage.setItem("token", data.login.token);
      props.setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>Error logging in</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginModal;
