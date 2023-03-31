import { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";

const useVideo = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getVideos();
    console.clear();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_COMMENTS_API, {
      Authorization: "AIzaSyDo7JQY5WfWC1kredar27izONSZV_1qmy0",
      Accept: "application/json",
    });
    if (response.status >= 200 && response.status <= 299) {
      const json = await response.json();
      setComment(json?.items);
    } else {
      // Handle errors
      setComment(response.status);
      console.clear();
    }
  };

  //return video data
  return comment;
};

export default useVideo;
