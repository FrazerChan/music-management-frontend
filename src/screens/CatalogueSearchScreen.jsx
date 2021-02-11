import React from "react";
import CatalogueSearchForm from "../components/CatalogueSearchForm";
import Screen from "../components/Screen";

function CatalogueSearchScreen({ history }) {
  const handleSubmit = (query) => {
    history.push("/search-results?query=" + query);
  };

  return (
    <Screen>
      <h1>Catalogue</h1>
      <CatalogueSearchForm onSubmit={handleSubmit} />
    </Screen>
  );
}

export default CatalogueSearchScreen;
