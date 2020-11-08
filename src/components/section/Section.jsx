import React, { Component } from "react";
import axios from "axios";
import Navbar from "./navbar/Navbar";
import SideNav from "./sideNavbar/SideNav";
import MainDiv from "./mainDiv/MainDiv";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: true,
      inputValue: "",
      searchedItems: [],
      trendingVideos: [],
    }
  }
  toggleNav = () => {
    this.setState((prevState) => ({
      toggler: !prevState.toggler,
    }));
  };
  inputChange = async (e) => {
    this.setState({ inputValue: e.target.value });
  };
  componentDidMount() {
    this.getData();
    this.getTrendData();
  }
  getData = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        key: "AIzaSyCdXjI8f3QWwf6HEWVYAPU4-ZVrn4kPoRw",
        maxResults: 30,
        q: this.state.inputValue,
      },
    });
    this.setState({
      searchedItems: res.data.items
        .filter((item) => item.id.hasOwnProperty("videoId"))
        .map((item) => [
          item.id.videoId,
          item.snippet.channelTitle,
          item.snippet.title,
          item.snippet.thumbnails.high.url,
        ]),
    });
  };
  getTrendData = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/videos",
      params: {
        part: "snippet,contentDetails,statistics",
        key: "AIzaSyCdXjI8f3QWwf6HEWVYAPU4-ZVrn4kPoRw",
        maxResults: 30,
        chart: "mostPopular",
        regionCode: "IN",
      },
    });
    this.setState({
      trendingVideos: res.data.items.map((item) => [
        item.id,
        item.snippet.channelTitle,
        item.snippet.title,
        item.snippet.thumbnails.high.url,
      ]),
    });
  };
  render() {
    return (
      <section>
        <div className="container-fluid w-100 h-100 d-flex">
          <SideNav toggleNav={this.toggleNav} toggler={this.state.toggler} />
          <div
            className={`${
              this.state.toggler ? "main-comp" : "toggle-main-comp"
            } d-flex flex-column position-relative`}
          >
            <Navbar inputChange={this.inputChange} getData={this.getData} logout={this.props.logout} />
            <MainDiv
              searchedItems={this.state.searchedItems}
              trendingVideos={this.state.trendingVideos}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
