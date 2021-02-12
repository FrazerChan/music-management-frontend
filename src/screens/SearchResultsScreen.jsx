import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";

import Screen from "../components/Screen";
import Pagination from "../components/Pagination";
import ResultRecord from "../components/ResultRecord";

function SearchResultsScreen({ location }) {
  const [results, setResults] = useState();

  const [currentPage, setCurrentPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const getQuery = () => {
    const { query } = queryString.parse(location.search);
    return query ? query : "";
  };

  const loadResults = async () => {
    const response = await axios.get(
      "http://localhost:8080/searchAlbumsAndSingers/" + getQuery()
    );

    if (response.data) {
      setResults(response.data.singers.concat(response.data.albums));
      setCurrentPage(0);
      setNumberOfPages(
        Math.ceil(
          (response.data.albums.length + response.data.singers.length) / 5
        )
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
      loadResults();
    } else {
      clearResults();
    }
  }, [location]);

  return (
    <Screen>
      <h1>{"Results for: " + getQuery()} </h1>
      <div className="container">
        <div className="row border py-1 result-record">
          <div className={"col height-3em"}>Record type</div>
          <div className={"col height-3em"}>Singer</div>
          <div className={"col height-3em"}>Sex/Album</div>
          <div className={"col height-3em"}>DOB/Year</div>
          <div className={"col-4 height-3em"}>Company</div>
        </div>
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
