import React from "react";

const VideoContainer = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {Array(15)
        .fill("")
        .map(() => (
          <div className=" h-48 w-80 bg-white rounded-xl">VideoContainer</div>
        ))}
    </div>
  );
};

export default VideoContainer;
