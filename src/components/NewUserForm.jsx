import React, { useState } from "react";
import axios from "axios";
import settings from "../config/settings";
import InputField from "./InputField";

function NewUserForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [matchingPassword, setMatchingPassword] = useState("");

  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [matchingPasswordError, setMatchingPasswordError] = useState();

  const [requestError, setRequestError] = useState();
  const [requestSuccess, setRequestSuccess] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) return;
    try {
      const response = await axios.post(settings.apiEndpoint + "add_user", {
        username: username.trim(),
        password: password.trim(),
      });

      setRequestError();
      setRequestSuccess("User added.");
    } catch (error) {
      if (error.response?.status === 409) {
        setRequestError("User already exists.");
      } else {
        setRequestError("An unexpected error has occured.");
      }
      setRequestSuccess();
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleMatchingPasswordChange = (e) => {
    setMatchingPassword(e.currentTarget.value);
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
    if (matchingPassword.trim() === "") {
      setMatchingPasswordError("Re-entered password is required.");
      error = true;
    } else if (matchingPassword.trim() !== password.trim()) {
      setMatchingPasswordError("Passwords must match.");
      error = true;
    } else {
      setMatchingPasswordError();
    }
    return error;
  };

  return (
    <div className="mt-4">
      <h4>New user:</h4>
      <div className="border border-dark rounded p-4">
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
          <InputField
            error={matchingPasswordError}
            label="Re-enter password"
            name="matchingPassword"
            onChange={handleMatchingPasswordChange}
            type={"password"}
            value={matchingPassword}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {requestSuccess && (
          <div className="alert alert-success mt-2">{requestSuccess}</div>
        )}
        {requestError && (
          <div className="alert alert-danger mt-2">{requestError}</div>
        )}
      </div>
    </div>
  );
}

export default NewUserForm;
