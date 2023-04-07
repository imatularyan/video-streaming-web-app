const Error = ({ statusCode, errorMessage, width, urlError }) => {
  return (
    <div
      className={
        "w-full text-xl h-screen flex flex-col justify-center items-center font-roboto" +
        width
      }
    >
      <h1>{statusCode}</h1>
      <h2 className=" text-4xl font-light">{urlError}</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Error;
