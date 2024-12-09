import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/videoPlayer.css";

const VideoPlayer = () => {
  const location = useLocation();
  const [videoLink, setVideoLink] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (location.state && location.state.videoLink) {
      setVideoLink(location.state.videoLink);
    }
  }, [location]);

  const handleVideoError = () => {
    setIsError(true);
  };

  return (
    <div className="video-player-container">
      {isError ? (
        <p>Sorry, we couldn't load the video. Please try another one.</p>
      ) : (
        <div className="iframe-container">
          <iframe
            width="100%"
            height="auto"
            src={videoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Player"
            onError={handleVideoError}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
