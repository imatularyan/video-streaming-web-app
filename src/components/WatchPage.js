import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import useVideo from "../utils/useVideo";

const WatchPage = () => {
  const videoData = useVideo();

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      {/* <div className="bg-gradient-to-r  from-neutral-900 to-neutral-900 h-[800px] w-screen blur-md  bg-black/100 absolute -z-40"></div> */}
      {/* <div className="bg-gradient-to-r  from-neutral-600 via-transparent to-neutral-700 h-full backdrop-blur-3xl"> */}
      {/* <div className=" h-full w-full px-4 pt-4 pb-20 flex gap-5 bg-black/70 z-30"> */}
      <div className=" h-full w-full px-4 pt-4 pb-20 flex gap-5 bg-white/30 z-30 shadow-sm border-b">
        <div className="z-40">
          <iframe
            className="z-50 shadow-md shadow-zinc-500"
            width="1100"
            height="680"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className=" text-xl font-bold mt-4">
            {videoData.map((video) =>
              video.id === searchParams.toString().slice(2, 13)
                ? video.snippet.title.toString()
                : null
            )}
          </div>
        </div>
        <div className=" w-full min-w-fit">
          <LiveChat />
        </div>
      </div>
      {/* </div> */}
      <div className="">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
