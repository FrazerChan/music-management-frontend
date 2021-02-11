import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";

import Screen from "../components/Screen";
import Pagination from "../components/Pagination";
import ResultRecord from "../components/ResultRecord";

function SearchResultsScreen({ location }) {
  const [albums, setAlbums] = useState();
  const [singers, setSingers] = useState();
  const [results, setResults] = useState();
  const [query, setQuery] = useState();

  const [currentPage, setCurrentPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const getQuery = () => {
    const { query } = queryString.parse(location.search);
    return query ? query : "";
  };

  const loadResults = async () => {
    const response = await axios.get(
      "http://localhost:8080/searchAlbums/" + getQuery()
    );

    if (response.data) {
      setAlbums(response.data.albums);
      setSingers(response.data.singers);
      setResults(response.data.albums.concat(response.data.singers));
      setCurrentPage(0);
      setNumberOfPages(
        // response.data.singers.length / 5
        (response.data.albums.length + response.data.singers.length) / 5
      );
    }
  };

  const onClick = (pageNumber) => {
    if (pageNumber < 0 || pageNumber > numberOfPages - 1) return;

    setCurrentPage(pageNumber);
  };

  const clearResults = () => {
    setCurrentPage(0);
    setNumberOfPages(0);
    setResults();
  };

  useEffect(() => {
    if (getQuery()) {
      console.log("load");
      loadResults();
    } else {
      console.log("clear");
      clearResults();
    }
  }, [location]);

  return (
    <Screen>
      <h1>{"Results for: " + getQuery()} </h1>
      <div className="container">
        {results?.map((record, index) => {
          if (index >= currentPage * 5 && index < currentPage * 5 + 5) {
            return (
              //   <li className="list-group-item" key={"listItem" + index}>
              <ResultRecord key={"record" + index} record={record} />
              //   </li>
            );
          }
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onClick={onClick}
      />
    </Screen>
  );
}

export default SearchResultsScreen;
