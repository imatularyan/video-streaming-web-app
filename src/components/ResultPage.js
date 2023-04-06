import useResults from "../utils/useResults";
import Error from "./Error";
import ResultCard from "./ResultCard";
import { Link } from "react-router-dom";

const ResultPage = () => {
  const videoResults = useResults();
  console.log("videoresults", videoResults);
  console.log("videoresults", videoResults[0]?.id?.videoId);

  return !videoResults?.length ? (
    <Error
      statusCode={videoResults}
      errorMessage={
        "The results API is exceeded the limit, please try again later!"
      }
    />
  ) : (
    <div className=" w-full h-screen font-roboto">
      <div className="flex flex-wrap flex-col w-full gap-4 justify-center ">
        {videoResults?.map((video, index) => (
          <Link to={"/watch?v=" + video?.id?.videoId} key={index}>
            <ResultCard result={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
