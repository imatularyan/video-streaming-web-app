import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "./searchSlice";

const useSuggestions = (searchText, setSearchText) => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchText(searchCache[searchText]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchText);
      if (response.status >= 200 && response.status <= 299) {
        const json = await response?.json();
        setSearchText(json[1]);
        dispatch(
          cacheResults({
            [searchText]: json[1],
          })
        );
      } else {
        setSearchText(response.status);
        dispatch(
          cacheResults({
            [searchText]: response.status,
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  return searchText;
};

export default useSuggestions;
