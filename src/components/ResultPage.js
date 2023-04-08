import useResults from "../utils/useResults";
import Error from "./Error";
import ResultCard from "./ResultCard";

const ResultPage = () => {
  const videoResults = useResults();
  console.log("videoresults", videoResults);

  return !videoResults?.length ? (
    <Error
      statusCode={videoResults}
      errorMessage={
        "The results API is exceeded the limit, please try again later!"
      }
    />
  ) : (
    <div className=" w-full h-screen font-roboto p-5">
      <div className="w-10/12 h-max">
        {videoResults?.map((video) => (
          <ResultCard key={video?.id?.videoId} result={video} />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
