const ChatMesssage = ({ name, message }) => {
  return (
    <div className=" flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bole px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMesssage;
