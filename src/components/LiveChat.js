import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className=" w-full h-[550px] border bg-white rounded-lg flex flex-col-reverse overflow-y-scroll pt-2 whitespace-nowrap">
        <div className="">
          <div className="p-1">
            {chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
          </div>
          <form
            className="w-full sticky bottom-0"
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(
                addMessage({
                  name: "Atul Aryan",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
          >
            <div className="w-full text-center flex items-center p-2 gap-1 bg-gray-100">
              <input
                placeholder="Type your message...."
                className=" p-2 w-4/5 rounded-md m-auto shadow-sm"
                type="text"
                value={liveMessage}
                onChange={(e) => {
                  setLiveMessage(e.target.value);
                }}
              />
              <button className="ml-1 py-2 px-5 bg-blue-400 rounded-md text-white font-bold">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LiveChat;
