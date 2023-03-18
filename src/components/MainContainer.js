import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-wrap px-2 items-center justify-center">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
