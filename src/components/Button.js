import React from "react";

const Button = ({ name }) => {
  return (
    <div className="w-fit">
      <button className=" whitespace-nowrap px-3 py-2 m-2 bg-gray-200 rounded-md font-medium text-sm hover:bg-gray-300 h-min">
        {name}
      </button>
    </div>
  );
};

export default Button;
