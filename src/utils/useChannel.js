import { useState, useEffect } from "react";
import { YOUTUBE_CHANNEL_API } from "./constants";
import useVideo from "./useVideo";

const useChannel = (id) => {
  const [channelInfo, setChannelInfo] = useState([]);
  const videoData = useVideo();

  useEffect(() => {
    getChannel();
  }, [videoData]);

  const getChannel = async () => {
    try {
      const res = await fetch(`${YOUTUBE_CHANNEL_API}${id}`);
      const json = await res.json();
      setChannelInfo(json);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return channelInfo;
};

export default useChannel;
