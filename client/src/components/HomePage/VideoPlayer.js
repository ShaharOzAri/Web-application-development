import * as React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <ReactPlayer url="https://vimeo.com/722663800" />
    </div>
  );
}

export default VideoPlayer;
