import React from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import Video from "./video/Video";

class Scroll extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           items: this.props.searchedItems.slice(0, 6),
//           hasMore: true,
//           endIndex : 6
//         };
//     }

//   fetchMoreData = () => {
//       console.log("ghfhgfhg")
//     if (this.state.items.length >= this.props.searchedItems.length) {
//       this.setState({ hasMore: false });
//       return;
//     }
//     this.setState({endIndex : this.state.endIndex + 6})
//     setTimeout(() => {
//       this.setState({
//         items: this.props.searchedItems.slice(0, this.state.endIndex)
//       });
//     }, 500);
//   };

  render() {
    return (
        // <InfiniteScroll
        //   dataLength={this.state.items.length}
        //   next={this.fetchMoreData}
        //   hasMore={this.state.hasMore}
        //   loader={<h4>Loading...</h4>}
        //   endMessage={
        //     <p style={{ textAlign: "center" }}>
        //       <b>Yay! You have seen it all</b>
        //     </p>
        //   }
        // >
          <div className="videos d-flex flex-wrap justify-content-center p-1">
          {this.props.searchedItems.map((item, index) => {
            return (
              <Video
                items={item}
                key={index}
                onClick={() => this.props.playVideo(item)}
              />
            );
          })}
        </div>
        // </InfiniteScroll>
    );
  }
}

export default Scroll;