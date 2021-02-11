import React, { useState } from "react";
import InputField from "./InputField";

function NewUserForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [matchingPassword, setMatchingPassword] = useState("");

  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [matchingPasswordError, setMatchingPasswordError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) return;
    console.log(username);
    console.log(password);
    console.log(matchingPassword);
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
      </div>
    </div>
  );
}

export default NewUserForm;
