import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_RESULT } from "./constants";

const useResults = (query) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getSearchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getSearchData = async () => {
    try {
      const response = await fetch(`${YOUTUBE_SEARCH_RESULT}${query}`);
      if (response.status >= 200 && response.status <= 299) {
        const jsonData = await response?.json();
        setSearchData(jsonData?.items);
      } else {
        setSearchData(response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return searchData;
};

export default useResults;
