import userIcon from "../assets/userIcon.svg";

const ChatMesssage = ({ name, message }) => {
  return (
    <div className=" flex items-center shadow-sm p-2">
      <img className="h-8" alt="user" src={userIcon} />
      <span className="font-bole px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMesssage;
