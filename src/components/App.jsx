import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import Section from "./section/Section";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      nameError: false,
      passwordError: false,
    };
  }
  loginData = (e) => {
    if (e.target.value.length < 20) {
      e.target.id === "username"
        ? this.setState({ username: e.target.value })
        : this.setState({ password: e.target.value });
    }
  };
  setLogin = () => {
    const { history } = this.props;
    if (this.state.username !== "" && this.state.password !== "") {
      this.setState({ loggedIn: true });
      localStorage.setItem("username", this.state.username);
      history.push("/home");
      this.setState({ nameError: false });
      this.setState({ passwordError: false });
    } else {
      if (this.state.username === "") this.setState({ nameError: true });
      else this.setState({ nameError: false });
      if (this.state.password === "") this.setState({ passwordError: true });
      else this.setState({ passwordError: false });
    }
  };
  logout = () => {
    this.setState({ loggedIn: false });
    localStorage.removeItem("username");
    this.setState({ username: "", password : "" });
    const { history } = this.props;
    history.push("./login");
  };
  render() {
    return (
      <Switch>
        <Route path="/login">
          {localStorage.getItem("username") === null ? (
            <Login
              login={this.setLogin}
              setLogin={this.state.loggedIn}
              loginData={this.loginData}
              nameError={this.state.nameError}
              passwordError={this.state.passwordError}
            />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>
        <Route path="/">
          {localStorage.getItem("username") !== null ? (
            <Section logout={this.logout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    );
  }
}

export default withRouter(App);
