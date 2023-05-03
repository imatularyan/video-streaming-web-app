import React from "react";
import useChannel from "../utils/useChannel";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelId, channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  const channelInfo = useChannel(channelId);

  return (
    <div className="text-[#0f0f0f] my-2 mx-4 cursor-pointer 2xl:w-64 xl:w-[23rem] md:w-44 sm:w-full">
      <div className="xl:w-[359px] xl:h-[202px] 2xl:h-36 md:w-44 md:h-24 sm:w-full sm:h-[400px]">
        <img
          className=" w-full h-full rounded-xl object-cover hover:rounded-none hove:transition duration-500 delay-75 ease-in-out"
          src={thumbnails?.high?.url}
          alt="thumbnail"
        />
      </div>
      <div className="flex mt-2">
        <div className="">
          <img
            width="40"
            className="border rounded-full"
            alt="logo"
            src={channelInfo?.items[0]?.snippet?.thumbnails?.default?.url}
          />
        </div>
        <div className="overflow-hidden px-5">
          <div className="text-base font-semibold">{title}</div>
          <div className=" text-sm font-normal">{channelTitle}</div>
          <div className=" text-sm font-normal">{viewCount} views</div>
          <div className=" text-sm font-normal">{channelId}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
