import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "./constants";
import { YOUTUBE_SEARCH_RESULT } from "./constants";

const useResults = (searchQuery) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getSearchData();
    console.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSearchData = async () => {
    const response = await fetch(
      `${YOUTUBE_SEARCH_RESULT}${searchQuery}&maxResults=50&key=${GOOGLE_API_KEY}`,
      {
        Authorization: GOOGLE_API_KEY,
        Accept: "application/json",
      }
    );
    if (response.status >= 200 && response.status <= 299) {
      const jsonData = await response.json();
      setSearchData(jsonData);
    } else {
      setSearchData(response.status);
      console.clear();
    }
  };

  return searchData;
};

export default useResults;
