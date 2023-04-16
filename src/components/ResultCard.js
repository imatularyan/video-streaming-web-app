import React from "react";
import { Link } from "react-router-dom";

const ResultCard = ({ result }) => {
  const { snippet, id } = result;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="text-[#0f0f0f] my-2 flex w-full h-max mx-auto gap-9">
      <div className=" w-[359px] h-[202px]">
        <Link to={"/watch?v=" + id?.videoId} key={id.videoId}>
          <img
            className=" w-full h-full rounded-xl object-cover"
            src={thumbnails?.high?.url}
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className=" px-2 mt-2">
        <Link to={"/watch?v=" + id?.videoId} key={id.videoId}>
          <div className=" text-small font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
            {title}
          </div>
        </Link>
        <div className=" text-sm font-normal">{channelTitle}</div>
      </div>
    </div>
  );
};

export default ResultCard;
