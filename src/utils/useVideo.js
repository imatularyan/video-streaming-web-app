import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const useVideo = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      if (response.status >= 200 && response.status <= 299) {
        const json = await response.json();
        setVideoData(json?.items);
      } else {
        setVideoData(response.status);
        console.clear();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return videoData;
};

export default useVideo;
