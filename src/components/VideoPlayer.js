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
    } else {
      setIsError(true);
    }
  }, [location]);

  const handleVideoError = () => {
    setIsError(true);
  };

  const toggleFullscreen = () => {
    const iframeContainer = document.querySelector(".iframe-container");
    if (iframeContainer.requestFullscreen) {
      iframeContainer.requestFullscreen();
    } else if (iframeContainer.webkitRequestFullscreen) {
      iframeContainer.webkitRequestFullscreen(); // For Safari
    } else if (iframeContainer.msRequestFullscreen) {
      iframeContainer.msRequestFullscreen(); // For IE/Edge
    }
  };

  return (
    <div className="video-player-container">
      {isError ? (
        <p>Sorry, we couldn't load the video. Please try another one.</p>
      ) : (
        <div className="iframe-container">
          <iframe
            width="100%"
            height="100%"
            src={videoLink}
            frameBorder="0"
            scrolling="no"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            title="Video Player"
            onError={handleVideoError}
          ></iframe>
          <button onClick={toggleFullscreen}>Fullscreen</button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
