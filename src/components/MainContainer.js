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
    <div className="flex flex-col px-2 w-11/12 justify-center items-center">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
