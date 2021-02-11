import React from "react";

function SingerRecord({ singer }) {
  return (
    <div className="d-flex flex-row">
      <div className={"mx-1 col height-3em"}>singer</div>
      <div className={"mx-1 col height-3em"}>{singer.name}</div>
      <div className={"mx-1 col height-3em"}>{singer.sex}</div>
      <div className={"mx-1 col height-3em"}>{singer.dob}</div>
      <div className={"mx-1 col height-3em"}>{singer.company}</div>
    </div>
  );
}

export default SingerRecord;
