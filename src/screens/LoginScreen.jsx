import React from "react";
import LoginForm from "../components/LoginForm";
import Screen from "../components/Screen";

function LoginScreen(props) {
  return (
    <Screen>
      <h1>Login</h1>
      <LoginForm />
    </Screen>
  );
}

export default LoginScreen;
