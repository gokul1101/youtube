import React from "react";
import "./Home.css";
import Scroll from "./Scroll";

const Home = (props) => {
  return (
    <div className="outer-div h-100">
      <div className="inner-div p-lg-3 p-md-2 p-1 h-100">
        <Scroll searchedItems={props.searchedItems} playVideo={props.playVideo}/>
      </div>
    </div>
  );
};

export default Home;
