import React from "react";
import "./PlayingVideo.css"
const PlayingVideoId = (props) => {
  return (
      <div className="embed-responsive embed-responsive-16by9 position-absolute">
        <iframe
          className="embed-responsive-item"
          title={props.id}
          src={`https://youtube.com//embed/${props.id}`}
          allowFullScreen
        ></iframe>
      </div>
  );
};

export default PlayingVideoId;
