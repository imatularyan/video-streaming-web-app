import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "./searchSlice";

const useSuggestions = (query, setQuery) => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[query]) {
        setQuery(searchCache[query]);
      } else {
        getSearchSuggestions();
      }
      console.clear();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + query);
    if (response.status >= 200 && response.status <= 299) {
      const json = await response?.json();
      console.log(json);
      setQuery(json[1]);
      dispatch(
        cacheResults({
          [query]: json[1],
        })
      );
    } else {
      setQuery(response.status);
      dispatch(
        cacheResults({
          [query]: response.status,
        })
      );
      console.clear();
    }
  };

  return [query];
};

export default useSuggestions;
