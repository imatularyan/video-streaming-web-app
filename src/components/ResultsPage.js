import VideoCard from "./VideoCard";
import useResults from "../utils/useResults";
import { Link } from "react-router-dom";
import Error from "./Error";

const ResultsPage = () => {
  const videoResults = useResults();

  return !videoResults >= 200 || !videoResults <= 299 ? (
    <Error
      statusCode={videoResults}
      errorMessage={
        "The results API is exceeded the limit, please try again later!"
      }
    />
  ) : (
    <div className=" w-full h-screen font-roboto">
      {videoResults?.items?.map((video, index) => (
        <div className="w-full" key={index}>
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;
