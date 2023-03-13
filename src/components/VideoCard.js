import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className=" w-80 h-fit mb-4">
      <div className="w-full h-44">
        <img
          className=" w-full h-full rounded-xl object-cover"
          src={thumbnails.high.url}
          alt="thumbnail"
        />
      </div>
      <div className=" px-2 mt-2">
        <div className=" text-small font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </div>
        <div className=" text-sm font-normal from-neutral-900">
          {channelTitle}
        </div>
        <div className=" text-sm font-normal">{viewCount} views</div>
      </div>
    </div>
  );
};

export default VideoCard;
