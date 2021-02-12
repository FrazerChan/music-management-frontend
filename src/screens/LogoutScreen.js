import { useEffect } from "react";

function LogoutScreen(props) {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location = "/";
  }, []);
  return null;
}

export default LogoutScreen;
