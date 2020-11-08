import React from "react";
import { NavLink } from "react-router-dom";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HomeIcon from "@material-ui/icons/Home";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import "./SideNav.css";
import logo from "../../../images/logo.png";
const SideNav = (props) => {
  return (
    <div className="side-nav h-100">
      <div
        className={`${
          props.toggler ? "expand-nav" : "toggle-nav"
        } h-100 d-flex flex-column`}
      >
        <div
          className="logo w-100 px-2 d-flex align-items-center justify-content-center"
          onClick={props.toggleNav}
        >
          <YouTubeIcon fontSize="large" style={{ transform: "scale(1.5)" }} />
          <img
            className="mx-2"
            src={logo}
            alt="logo"
            height="40px"
            width="90px"
          />
        </div>
        <div className="nav-list w-100 h-100">
          <ul className="d-flex flex-column w-100">
            <li className="position-relative">
              <NavLink
                to="/home"
                className="d-flex align-items-center side-nav-link"
              >
                <div></div>
                <HomeIcon style={{ fill: "#000", transform: "scale(1.3)" }} />
                <span className="text-dark ml-2 mt-1">Home</span>
              </NavLink>
            </li>
            <li className="position-relative">
              <NavLink
                to="/trend"
                className="d-flex align-items-center side-nav-link"
              >
                <div></div>
                <TrendingUpIcon
                  style={{ fill: "#000", transform: "scale(1.3)" }}
                />
                <span className="text-dark ml-2 mt-1">Trending</span>
              </NavLink>
            </li>
            <li className="position-relative">
              <NavLink
                to="/subscriptions"
                className="d-flex align-items-center side-nav-link"
              >
                <div></div>
                <SubscriptionsIcon
                  style={{ fill: "#000", transform: "scale(1.3)" }}
                />
                <span className="text-dark ml-2 mt-1">Subscriptions</span>
              </NavLink>
            </li>
            <li className="position-relative">
              <NavLink
                to="/library"
                className="d-flex align-items-center side-nav-link"
              >
                <div></div>
                <VideoLibraryIcon
                  style={{ fill: "#000", transform: "scale(1.3)" }}
                />
                <span className="text-dark ml-2 mt-1">Library</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
