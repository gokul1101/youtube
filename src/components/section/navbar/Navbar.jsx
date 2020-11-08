import React from "react";
import Search from "./search/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import "./Navbar.css";
const Navbar = (props) => {
  
  return (
    <div className="top-nav position-relative px-3">
      <div className="d-flex align-items-center justify-content-between mt-1 px-3">
        <Search inputChange={props.inputChange} getData={props.getData} />
        <div className="login-div">
          <div className="d-flex align-items-center mx-2">
            <div className="mx-2 mt-2">
              <NotificationsActiveIcon />
            </div>
            <div className="img mx-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_S9DUg_S9CHf-DxgcNbxYzZmibzud95wxTQslnreREOxA1ch1&usqp=CAU"
                alt="user"
                height="27px"
                width="27px"
              />
            </div>
      <span className="mx-2 text-capitalize">{localStorage.getItem("username")}</span>
            <div className="logout mt-1">
              <ExitToAppIcon onClick={props.logout}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
