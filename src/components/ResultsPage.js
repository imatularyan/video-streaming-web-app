import VideoCard from "./VideoCard";
import useResults from "../utils/useResults";
import { Link } from "react-router-dom";

const ResultsPage = () => {
  const videoResults = useResults();

  return (
    <div className=" w-full h-screen font-roboto">
      {videoResults?.items?.length >= 0 ? (
        videoResults?.items?.map((video, index) => (
          <div className="w-full" key={index}>
            <Link to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          </div>
        ))
      ) : (
        <div className="w-full text-lg h-screen flex flex-col justify-center items-center text-rose-900">
          {" "}
          <h1>{videoResults?.error?.code}</h1>
          <p>The results API is exceeded the limit, please try again later!</p>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
