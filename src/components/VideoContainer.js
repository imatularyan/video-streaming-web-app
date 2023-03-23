import VideoCard, { AdvideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import useVideo from "../utils/useVideo";
import Error from "./Error";

const VideoContainer = () => {
  const videoData = useVideo();
  console.log(videoData);

  return (
    <div className="flex flex-wrap w-fit gap-4 mr-">
      {videoData?.length >= 0 ? (
        <>
          {videoData[0] && <AdvideoCard info={videoData[0]} />}
          {videoData?.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </>
      ) : (
        <Error
          width={"w-screen"}
          statusCode={"403"}
          errorMessage={
            "The video API is exceeded the limit, please try again later!"
          }
        />
      )}
    </div>
  );
};

export default VideoContainer;
