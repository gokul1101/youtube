import React, { useState } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Home from "./home/Home"
import PlayingVideoId from "./playingVideo/PlayingVideo"
const MainDiv = (props) => {
  let [playingVideoId, setPlayingVideoId] = useState("")

  const routes = [
    {
      path: "/home",
      main: () => (
        <Home searchedItems={props.searchedItems} playVideo={playVideo} />
      ),
    },
    {
      path: "/trend",
      main: () => <Home searchedItems={props.trendingVideos} playVideo={playVideo} />,
    },
    {
      path: "/subscriptions",
      main: () => <h1>subscriptions</h1>,
    },
    {
      path: "/library",
      main: () => <h1>library</h1>,
    },
  ]
  const playVideo = (item) => {
    setPlayingVideoId(item[0])
  }

  return (
    <div className="main-div w-100 position-relative">
      <Switch>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            exact={route.exact}
            children={route.main}
          />
        ))}

        <Route exact path="/" render={() => <Redirect to="/home" />} />
        
        <Route
          path={`/watch/${playingVideoId}`}
          render={() => <PlayingVideoId id={playingVideoId}/>}
        />
      </Switch>
    </div>
  )
}

export default MainDiv
