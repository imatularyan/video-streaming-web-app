import VideoCard from "./VideoCard";
import useResults from "../utils/useResults";
import { Link } from "react-router-dom";
import Error from "./Error";

const ResultsPage = () => {
  const videoResults = useResults();

  return (
    <div className=" w-full h-screen font-roboto">
      {!videoResults ? (
        videoResults?.items?.map((video, index) => (
          <div className="w-full" key={index}>
            <Link to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          </div>
        ))
      ) : (
        <Error
          statusCode={videoResults}
          errorMessage={
            "The results API is exceeded the limit, please try again later!"
          }
        />
      )}
    </div>
  );
};

export default ResultsPage;
