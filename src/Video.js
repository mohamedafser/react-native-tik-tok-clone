import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="videoPlayer"
        // src="http://vjs.zencdn.net/v/oceans.mp4"
        src={url}
        type="video/mp4"
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        poster="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8262f50c-22c2-497d-9846-933d8e198af0/d53ucdv-0fb5e851-2ee4-44c3-80a1-d70a66d33be5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODI2MmY1MGMtMjJjMi00OTdkLTk4NDYtOTMzZDhlMTk4YWYwXC9kNTN1Y2R2LTBmYjVlODUxLTJlZTQtNDRjMy04MGExLWQ3MGE2NmQzM2JlNS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0cN8VpqbNasLvWccjoN1C94DiFO2YJEeSOXz97e_rzo"
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
