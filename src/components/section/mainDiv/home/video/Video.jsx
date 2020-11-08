import React from "react";
import { NavLink } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import "./Video.css";
const Video = (props) => {
  return (
    <div className="video position-relative">
      <div className="m-lg-3 m-md-2 m-1 card p-lg-3 p-md-2 p-1">
        <NavLink exact to={`/watch/${props.items[0]}`}>
          <div className="video-img position-relative" onClick={props.onClick}>
            <div className="play-button position-absolute">
              <PlayCircleOutlineIcon
                fontSize="large"
                onClick={props.onClick}
                style={{ fill: "#fff" }}
              />
            </div>

            <img
              className="card-img"
              src={props.items[3]}
              alt="img"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </NavLink>
        <div className="card-body">
          <h5 className="card-title my-2" onClick={props.onClick}>
            {props.items[1]}
          </h5>
          <p className="card-text d-inline mb-2">{props.items[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
