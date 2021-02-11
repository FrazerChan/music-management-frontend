import React, { useState } from "react";
import InputField from "./InputField";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) return;
    console.log(username);
    console.log(password);
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
          autofocus={true}
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
    </div>
  );
}

export default LoginForm;
