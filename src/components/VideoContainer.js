import VideoCard, { AdvideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import useVideo from "../utils/useVideo";
import ButtonList from "./ButtonList";
import useFilter from "../utils/useFilter";

const VideoContainer = () => {
  const videoData = useVideo();
  const filterData = useFilter();
  console.log(filterData);

  return (
    <>
      <ButtonList />
      <div className="flex flex-wrap w-full gap-4 justify-center ">
        {videoData[0] && <AdvideoCard info={videoData[0]} />}
        {videoData?.map((video) => (
          <Link to={"/watch?v=" + video?.id} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
