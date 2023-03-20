import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col px-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
