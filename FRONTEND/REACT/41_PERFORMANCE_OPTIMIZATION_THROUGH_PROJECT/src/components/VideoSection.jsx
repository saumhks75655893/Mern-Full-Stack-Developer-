import React from "react";
import "../App.css"

const videos = [
  {
    title: "Web Development Tutorial",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    title: "JavaScript Full Course",
    link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
  },
  {
    title: "Python Programming",
    link: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg",
  },
  {
    title: "React JS Crash Course",
    link: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
  },
  {
    title: "CSS Animations",
    link: "https://www.youtube.com/watch?v=3JluqTojuME",
    thumbnail: "https://img.youtube.com/vi/3JluqTojuME/maxresdefault.jpg",
  },
];

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2 className="section-title">Featured Videos</h2>

      <div className="grid video-grid grid-cols-3">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />

            <div className="video-content">
              <h3>{video.title}</h3>
              <p>Watch this amazing tutorial.</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;