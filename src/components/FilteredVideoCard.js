import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="text-[#0f0f0f] my-2 cursor-pointer 2xl:w-64 xl:w-[23rem] md:w-44 sm:w-full">
      <div className="xl:w-[359px] xl:h-[202px] 2xl:h-36 md:w-44 md:h-24 sm:w-full sm:h-[400px]">
        <img
          className=" w-full h-full rounded-xl object-cover"
          src={thumbnails?.high?.url}
          alt="thumbnail"
        />
      </div>
      <div className=" px-2 mt-2">
        <div className=" text-small font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </div>
        <div className=" text-sm font-normal">{channelTitle}</div>
        <div className=" text-sm font-normal">{viewCount} views</div>
      </div>
    </div>
  );
};

export default VideoCard;
