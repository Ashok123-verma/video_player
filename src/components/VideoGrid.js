import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/videoGrid.css";

// Dummy data for categories and videos
const categoryVideos = {
  Action: [
    {
      id: 1,
      title: "Action Video 1",
      link: "https://www.youtube.com/embed/AlMfhQQAIhU?si=HNH4GuIB43x6VhmV",
      thumbnail: "https://w0.peakpx.com/wallpaper/719/83/HD-wallpaper-the-lords-of-the-fallen-the-lords-of-the-fallen-2023-games-ps5-games-ps-games-games.jpg",
    },
    {
      id: 2,
      title: "Action Video 2",
      link: "https://www.youtube.com/embed/vAXrKz0cz4w?si=wYpvMFcqeFTcnsJ2",
      thumbnail: "https://i.ytimg.com/vi/dBd74snpV9U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDprZuZ_gKoSQPla5rnwTS-_uoxWw",
    },
    {
      id: 3,
      title: "Action Video 3",
      link: "https://www.youtube.com/embed/gHq5M0MQSDk?si=OHZ7ttgr_Q_0pFkQ",
      thumbnail: "https://clarityandflow.wordpress.com/wp-content/uploads/2011/01/aod-logo.jpg",
    },
  ],
  Drama: [
    {
      id: 1,
      title: "Drama Video 1",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      thumbnail: "https://via.placeholder.com/200x150?text=Comedy+Video+1",
    },
    {
      id: 2,
      title: "Drama Video 2",
      link: "https://www.youtube.com/embed/jZ2Ww5XWwFw?autoplay=1",
      thumbnail: "https://via.placeholder.com/200x150?text=Comedy+Video+2",
    },
  ],
  Comedy: [
    {
      id: 1,
      title: "Comedy Video 1",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      thumbnail: "https://via.placeholder.com/200x150?text=Comedy+Video+1",
    },
    {
      id: 2,
      title: "Comedy Video 2",
      link: "https://www.youtube.com/embed/jZ2Ww5XWwFw?autoplay=1",
      thumbnail: "https://via.placeholder.com/200x150?text=Comedy+Video+2",
    },
  ],
  // Add other categories as needed
};

const VideoGrid = () => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(categoryVideos[category] || []);
  }, [category]);

  return (
    <div className="video-grid-container">
      <h2>{category} Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <Link
            key={video.id}
            to={`/player/${video.id}`}
            state={{ videoLink: video.link }} // Pass single video link to the player
            className="video-card"
          >
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
