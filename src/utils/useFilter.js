import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "./constants";

const useFilter = (filterBtn) => {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    filterCategory();
  }, [filterBtn]);

  const filterCategory = async () => {
    const res = await fetch(
      `${YOUTUBE_VIDEOS_API}&videoCategoryId=${filterBtn}`
    );
    if (res.status >= 200 || res.status <= 299) {
      const json = await res.json();
      setFilterData(json?.items);
      // console.log(json?.items);
    } else {
      setFilterData(res.status);
    }
  };

  return filterData;
};

export default useFilter;
