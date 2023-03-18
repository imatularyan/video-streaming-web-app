import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const useVideo = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const json = await response.json();
    // console.log(json.items);
    setVideoData(json.items);
  };

  //return video data
  return videoData;
};

export default useVideo;
