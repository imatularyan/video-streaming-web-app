import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" w-full bg-orange-900">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
