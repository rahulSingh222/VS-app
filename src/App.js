import "./App.css";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import videosList from "./videos";

/**
 * The `App` function in JavaScript is a component that displays a video player on the left side and a
 * list of videos on the right side, allowing users to select and play different videos.
 * @returns The `App` component is being returned. It consists of a container with a video player on
 * the left side and a list of videos on the right side. The video player displays the video
 * corresponding to the `videoKey` state, and the list of videos allows the user to select a video to
 * play by clicking on it.
 */
function App() {
  const [videoKey, setVideoKey] = useState(videosList[Object.keys(videosList)[0]]);
  const playVideo = async (videoURL) => {
    setVideoKey(videoURL);
  };

  /* The `return` statement in the `App` function is responsible for rendering the JSX (JavaScript XML)
  elements that make up the user interface of the application. Here's a breakdown of what the
  `return` statement is doing: */
  return (
    <div className="container">
      {/* video player left side */}
      <div className="player-container">
        <ReactPlayer className="React-Player" url={videoKey} controls />,
      </div>

      {/* videos list right side */}
      <div className="list-container">
        <h2>Videos List</h2>
        <ul>
          {Object.entries(videosList).map(([title, url]) => (
            <li  className={ url === videoKey ? "highlight" : ""}
                key={title} 
                onClick={() => playVideo(url)}>
                  {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
