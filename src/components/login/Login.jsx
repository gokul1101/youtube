import React from "react";
import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import "./Login.css";
import LoginImg from "../../images/login.svg";
const Login = (props) => {
  return (
    <div className="login d-flex align-items-center justify-content-center p-3">
      <div className="login-img">
        <img src={LoginImg} alt="img" height="300px" width="300px" />
      </div>
      <form className="d-flex flex-column align-items-center px-2 py-4">
        <h4>Login to continue...</h4>
        <div className="username my-2">
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                error={props.nameError}
                id="username"
                onChange={props.loginData}
                autoComplete="off"
                label="Username"
              />
            </Grid>
          </Grid>
        </div>
        <div className="password my-2 mb-4">
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <VpnKeyIcon />
            </Grid>
            <Grid item>
              <TextField
                id="password"
                type ="password"
                error={props.passwordError}
                onChange={props.loginData}
                autoComplete="off"
                label="Password"
              />
            </Grid>
          </Grid>
        </div>
        <div className="d-flex">
          <div className="button my-3 mx-1">
            <Button variant="outlined" onClick={props.login}>
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
