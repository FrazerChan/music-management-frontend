import React from "react";

function AlbumRecord({ album }) {
  return (
    <div className="row border py-1 result-record">
      <div className="col height-3em">album</div>
      <div className="col height-3em">{album.singer}</div>
      <div className="col height-3em">{album.album}</div>
      <div className="col height-3em">{album.year}</div>
      <div className="col-4 height-3em">{album.company}</div>
    </div>
  );
}

export default AlbumRecord;
