const Error = ({ statusCode, errorMessage, width }) => {
  return (
    <div
      className={
        "w-full text-lg h-screen flex flex-col justify-center items-center text-rose-900 " +
        width
      }
    >
      {" "}
      <h1>{statusCode}</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Error;
