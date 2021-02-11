import React from "react";

function SingerRecord({ singer }) {
  return (
    <div className="row border py-1 result-record">
      <div className={"col height-3em"}>singer</div>
      <div className={"col height-3em"}>{singer.name}</div>
      <div className={"col height-3em"}>{singer.sex}</div>
      <div className={"col height-3em"}>{singer.dob}</div>
      <div className={"col-4 height-3em"}>{singer.company}</div>
    </div>
  );
}

export default SingerRecord;
