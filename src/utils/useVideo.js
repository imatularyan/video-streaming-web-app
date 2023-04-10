import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const useVideo = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideos();
    console.clear();
  }, []);

  const getVideos = async (e) => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    if (response.status >= 200 && response.status <= 299) {
      const json = await response.json();
      setVideoData(json?.items);
    } else {
      // Handle errors
      setVideoData(response.status);
      e.preventDefault();
      console.clear();
    }
  };

  //return video data
  return videoData;
};

export default useVideo;
