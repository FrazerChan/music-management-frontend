import React from "react";
import { Link } from "react-router-dom";

function Pagination({ currentPage, numberOfPages, onClick }) {
  const renderButtons = () => {
    let buttons = [];
    for (let i = 0; i < numberOfPages; i++) {
      buttons.push(
        <li className="page-item" key={"listitem" + i}>
          <button
            className="page-link"
            key={"button" + i}
            onClick={() => onClick(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };

  return (
    <nav className="my-3">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {renderButtons()}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
