import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Kapil Sharma",
  "Gaming",
  "Mixes",
  "Chill-out music",
  "Dramedy",
  "Instrumentals",
  "Healing Prayers",
  "JavaScript",
  "Universe",
  "Computers",
  "Comedy Clubs",
  "Comedy Clubs",
  "Comedy Clubs",
  "Comedy Clubs",
];

const ButtonList = () => {
  return (
    <div className="flex w-11/12 overflow-clip overflow-x-auto overscroll-none">
      {/* <button className=" hover:bg-gray-100 p-2 rounded-full cursor-pointer">
          ←
        </button> */}
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
      <div>
        <button className="hover:bg-gray-100 p-2 rounded-full cursor-pointer">
          {" "}
          →
        </button>
      </div>
    </div>
  );
};

export default ButtonList;
