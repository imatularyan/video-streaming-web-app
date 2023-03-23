import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "./constants";

const useResults = (searchQuery) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getSearchData();
  }, [searchQuery]);

  const getSearchData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=+${searchQuery}&maxResults=50&key=${GOOGLE_API_KEY}`,
      {
        Authorization: GOOGLE_API_KEY,
        Accept: "application/json",
      }
    );
    const jsonData = await response.json();
    setSearchData(jsonData);
    console.log(jsonData);
  };

  return searchData;
};

export default useResults;
