import React, { useEffect, useState } from "react";
import axios from "axios";

import Screen from "../components/Screen";

function SearchResultsScreen(props) {
  const [results, setResults] = useState();

  const loadResults = async () => {
    const response = await axios.get("http://localhost:8080/singers");

    if (response.data) {
      setResults(response.data);
    }
  };

  useEffect(() => {});

  return (
    <Screen>
      <h1>Results</h1>
    </Screen>
  );
}

export default SearchResultsScreen;
