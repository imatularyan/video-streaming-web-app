const Shimmer = () => {
  return (
    <div className="flex flex-col px-2 w-11/12 justify-center items-center mx-auto">
      <div className="flex flex-wrap w-full gap-4 justify-center ">
        {Array(50)
          .fill("")
          .map((index) => (
            <div
              className="text-[#0f0f0f] my-2 cursor-pointer 2xl:w-64 xl:w-[23rem] md:w-44 sm:w-full"
              key={index}
            >
              <div className="xl:w-[22rem] xl:h-44 2xl:h-36 md:w-44 md:h-24 sm:w-full sm:h-[400px]"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
