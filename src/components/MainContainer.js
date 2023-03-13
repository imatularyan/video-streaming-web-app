import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-5/6 py-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
