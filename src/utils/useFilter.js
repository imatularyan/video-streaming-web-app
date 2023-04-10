import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "./constants";

const useFilter = () => {
  const [filterData, setFilterData] = useState([]);
  const [filterBtn, setFilterBtn] = useState();

  useEffect(() => {
    filterCategory();
  }, [filterBtn]);

  const filterCategory = async (e) => {
    const res = await fetch(
      `${YOUTUBE_VIDEOS_API}&videoCategoryId=${filterBtn}`
    );
    if (res.status >= 200 || res.status <= 299) {
      const json = await res?.json();
      setFilterData(json?.items);
    } else {
      setFilterData(res.status);
      e.preventDefault();
    }
  };

  return [filterData, setFilterBtn], [filterBtn];
};

export default useFilter;
