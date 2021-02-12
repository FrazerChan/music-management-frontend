import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import CatalogueSearchScreen from "./screens/CatalogueSearchScreen";
import HomeScreen from "./screens/HomeScreen";
import InsertDataScreen from "./screens/InsertDataScreen";
import LoginScreen from "./screens/LoginScreen";
import LogoutScreen from "./screens/LogoutScreen";
import NavBar from "./components/NavBar";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import ScreenNotFoundScreen from "./screens/ScreenNotFoundScreen";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setUser(user);
    } catch (error) {}
  }, []);

  return (
    <div>
      <NavBar user={user} />
      <Switch>
        <Route
          path="/catalogue-search"
          render={(props) => {
            if (!user) return <Redirect to="/login" />;
            return <CatalogueSearchScreen {...props} />;
          }}
        />
        <Route
          path="/login"
          render={(props) => {
            if (user) return <Redirect to="/" />;
            return <LoginScreen {...props} />;
          }}
        />
        <Route path="/logout" component={LogoutScreen} />
        <Route
          path="/insert-data"
          render={(props) => {
            if (!user) return <Redirect to="/login" />;
            return <InsertDataScreen {...props} />;
          }}
        />
        <Route
          path="/search-results"
          render={(props) => {
            if (!user) return <Redirect to="/login" />;
            return <SearchResultsScreen {...props} />;
          }}
        />
        <Route path="/404" exact component={ScreenNotFoundScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
