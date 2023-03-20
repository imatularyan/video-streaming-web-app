import VideoCard, { AdvideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import useVideo from "../utils/useVideo";

const VideoContainer = () => {
  const videoData = useVideo();

  return (
    <div className="flex flex-wrap w-fit gap-4">
      {videoData[0] && <AdvideoCard info={videoData[0]} />}
      {videoData.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
