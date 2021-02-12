import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import settings from "../config/settings";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();

  const [requestError, setRequestError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) return;
    try {
      const response = await axios.post(settings.apiEndpoint + "authenticate", {
        username: username.trim(),
        password: password.trim(),
      });

      localStorage.setItem("token", response.data.token);
      window.location = "/";

      setRequestError();
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        setRequestError("Invalid username or password");
      } else {
        setRequestError("An unexpected error has occured.");
      }
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const validate = () => {
    let error = false;
    if (username.trim() === "") {
      setUsernameError("Username is required.");
      error = true;
    } else {
      setUsernameError();
    }
    if (password.trim() === "") {
      setPasswordError("Password is required.");
      error = true;
    } else {
      setPasswordError();
    }
    return error;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          autoFocus={true}
          error={usernameError}
          label="Username"
          name="username"
          onChange={handleUsernameChange}
          value={username}
        />
        <InputField
          error={passwordError}
          label="Password"
          name="password"
          onChange={handlePasswordChange}
          type={"password"}
          value={password}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {requestError && (
        <div className="alert alert-danger mt-2">{requestError}</div>
      )}
    </div>
  );
}

export default LoginForm;
