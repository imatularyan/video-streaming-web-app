import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="my-2 cursor-pointer 2xl:w-64 xl:w-[23rem] md:w-44">
      <div className="xl:w-[23rem] xl:h-52  2xl:h-36 md:h-24">
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

export const AdvideoCard = ({ info }) => {
  return (
    <div className=" border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
