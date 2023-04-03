import { useEffect, useState } from "react";
import { YOUTUBE_CATEGORY_API } from "./constants";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getVideos();
    console.clear();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_CATEGORY_API, {
      Authorization: "AIzaSyDo7JQY5WfWC1kredar27izONSZV_1qmy0",
      Accept: "application/json",
    });
    if (response.status >= 200 && response.status <= 299) {
      const json = await response.json();
      setCategories(json?.items);
    } else {
      // Handle errors
      setCategories(response.status);
      console.clear();
    }
  };

  //return video data
  return categories;
};

export default useCategories;
