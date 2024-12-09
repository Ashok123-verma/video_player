import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/videoGrid.css";

// Sample category videos with dummy data
const categoryVideos = {
  Action: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Action Video ${i + 1}`,
    link: `https://www.youtube.com/embed/js0ZoGcCL0w?autoplay=1`, // YouTube embed link
    thumbnail: `https://via.placeholder.com/200x150?text=Action+Video+${i + 1}`,
  })),
  Comedy: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Comedy Video ${i + 1}`,
    link: `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`, // YouTube embed link
    thumbnail: `https://via.placeholder.com/200x150?text=Comedy+Video+${i + 1}`,
  })),
  Drama: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Drama Video ${i + 1}`,
    link: `https://www.youtube.com/embed/LsoLEjrDogU?autoplay=1`, // YouTube embed link
    thumbnail: `https://via.placeholder.com/200x150?text=Drama+Video+${i + 1}`,
  })),
  Horror: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Horror Video ${i + 1}`,
    link: `https://www.youtube.com/embed/ZwD0_RQG7oM?autoplay=1`, // YouTube embed link
    thumbnail: `https://via.placeholder.com/200x150?text=Horror+Video+${i + 1}`,
  })),
  Romance: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Romance Video ${i + 1}`,
    link: `https://www.youtube.com/embed/jz6kjS_EHb0?autoplay=1`, // YouTube embed link
    thumbnail: `https://via.placeholder.com/200x150?text=Romance+Video+${i + 1}`,
  })),
};

const VideoGrid = () => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Simulate fetching videos for the selected category
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
            state={{ videoLink: video.link }}
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
