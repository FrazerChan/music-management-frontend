import { Redirect, Route, Switch } from "react-router-dom";

import CatalogueSearchScreen from "./screens/CatalogueSearchScreen";
import HomeScreen from "./screens/HomeScreen";
import InsertDataScreen from "./screens/InsertDataScreen";
import LoginScreen from "./screens/LoginScreen";
import NavBar from "./components/NavBar";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import ScreenNotFoundScreen from "./screens/ScreenNotFoundScreen";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/catalogue-search" component={CatalogueSearchScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/insert-data" component={InsertDataScreen} />
        <Route path="/search-results" component={SearchResultsScreen} />
        <Route path="/404" exact component={ScreenNotFoundScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
