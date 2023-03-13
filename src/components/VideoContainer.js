import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const json = await response.json();
    console.log(json.items);
    setVideoData(json.items);
  };

  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {videoData.map((video) => (
        <a href="">
          <VideoCard key={video.id} info={video} />
        </a>
      ))}
    </div>
  );
};

export default VideoContainer;
