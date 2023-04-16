import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_RESULT } from "./constants";

const useResults = (searchQuery) => {
  const [searchData, setSearchData] = useState([]);

  console.log(searchQuery);
  useEffect(() => {
    getSearchData();
    console.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchData = async () => {
    const response = await fetch(`${YOUTUBE_SEARCH_RESULT}${searchQuery}`);
    if (response.status >= 200 && response.status <= 299) {
      const jsonData = await response?.json();
      setSearchData(jsonData?.items);
    } else {
      setSearchData(response.status);
    }
  };

  return searchData;
};

export default useResults;
