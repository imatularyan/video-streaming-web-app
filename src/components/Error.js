const Error = ({ statusCode, errorMessage, width }) => {
  return (
    <div
      className={
        "w-full text-lg h-screen flex flex-col justify-center items-center font-roboto" +
        width
      }
    >
      {statusCode || errorMessage ? (
        <>
          <h1>{statusCode}</h1>
          <p>{errorMessage}</p>
        </>
      ) : (
        <h1>Page is not found!</h1>
      )}
    </div>
  );
};

export default Error;
