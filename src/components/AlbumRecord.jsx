import React from "react";

function AlbumRecord({ album }) {
  return (
    <div className="d-flex flex-row">
      <div className="mx-1 col height-3em">album</div>
      <div className="mx-1 col height-3em">{album.singer}</div>
      <div className="mx-1 col height-3em">{album.album}</div>
      <div className="mx-1 col height-3em">{album.year}</div>
      <div className="mx-1 col height-3em">{album.company}</div>
    </div>
  );
}

export default AlbumRecord;
