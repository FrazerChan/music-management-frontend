import React from "react";
import AlbumRecord from "./AlbumRecord";
import SingerRecord from "./SingerRecord";

function ResultRecord({ record }) {
  if (record.album) {
    return <AlbumRecord album={record} />;
  } else {
    return <SingerRecord singer={record} />;
  }
}

export default ResultRecord;
