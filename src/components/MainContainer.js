import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import Error from "./Error";
import useVideo from "../utils/useVideo";

const MainContainer = () => {
  const videoData = useVideo();

  return !videoData >= 200 ? (
    <Error
      width={"w-screen"}
      statusCode={videoData}
      errorMessage={
        "The video API is exceeded the limit, please try again later!"
      }
    />
  ) : (
    <div className="flex flex-col px-2 m-auto xl:w-11/12 md:w-11/12 xl:md:w-11/12 2xl:md:w-11/12">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
