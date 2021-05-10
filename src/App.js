import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
import db from "./firebase";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos([snapshot.docs.map((doc) => doc.data())])
    );
  }, []);
  return (
    <div className="app">
      <div className="appVideos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
        {/* <Video />
        <Video />
        <Video /> */}
      </div>
    </div>
  );
}

export default App;
