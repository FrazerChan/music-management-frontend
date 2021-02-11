import React, { useState } from "react";
import InputField from "./InputField";

function CatalogueSearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");
  const [queryError, setQueryError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) return;
    onSubmit(query);
  };

  const handleQueryChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const validate = () => {
    let error = false;
    if (query.trim() === "") {
      setQueryError("Singer/album is required.");
      error = true;
    } else {
      setQueryError();
    }
    return error;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          autoFocus={true}
          error={queryError}
          label="Search for a singer or album:"
          name="query"
          onChange={handleQueryChange}
          value={query}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CatalogueSearchForm;
