import React from "react";

function SingerRecord({ singer }) {
  const formatDate = (date) => {
    let year = date.substring(0, 4);
    let month = date.substring(4, 6);
    let day = date.substring(6, 8);

    return [day, month, year].join("/");
  };

  return (
    <div className="row border py-1 result-record">
      <div className={"col height-3em"}>singer</div>
      <div className={"col height-3em"}>{singer.name}</div>
      <div className={"col height-3em"}>{singer.sex}</div>
      <div className={"col height-3em"}>{formatDate(singer.dob)}</div>
      <div className={"col-4 height-3em"}>{singer.company}</div>
    </div>
  );
}

export default SingerRecord;
