import React from "react";
import Error from "./Error";
import useVideo from "../utils/useVideo";
import { Outlet } from "react-router-dom";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const videoData = useVideo();
  return !videoData?.length ? (
    <Error
      width={"w-screen"}
      statusCode={videoData}
      errorMessage={
        "The video API is exceeded the limit, please try again later!"
      }
    />
  ) : (
    <div className="flex flex-col px-2 w-10/12 justify-center mx-auto">
      <ButtonList />
      <Outlet />
    </div>
  );
};

export default MainContainer;
