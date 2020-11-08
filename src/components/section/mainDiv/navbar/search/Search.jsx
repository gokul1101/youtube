import React from "react";
import { Button, TextField } from "@material-ui/core";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import { NavLink } from "react-router-dom";
import "./Search.css";
const Search = (props) => {
  return (
    <div className="search d-flex m-3">
      <div className="input">
        <TextField
          id="outlined-search"
          label="Search videos"
          type="search"
          style ={{width : 250}}
          variant="outlined"
          onChange={props.inputChange}
        />
      </div>
      <NavLink to="/home">
        <div className="search-btn ml-3">
          <Button
            variant="outlined"
            startIcon={<YoutubeSearchedForIcon />}
            onClick={props.getData}
          >
            Search
          </Button>
        </div>
      </NavLink>
    </div>
  );
};

export default Search;
