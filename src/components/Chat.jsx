import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  // Create a ref for scrolling
  const chatEndRef = useRef(null);

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, { withCredentials: true });

    const chatMessages = chat?.data?.messages.map((msg) => {
      return {
        firstName: msg?.senderId?.firstName,
        lastName: msg?.senderId?.lastName,
        text: msg?.text,
      };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const socket = createSocketConnection();
    socket.emit("joinChat", { firstName: user?.firstName, userId, targetUserId });

    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      setMessages((messages) => [...messages, { firstName, lastName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  // Scroll to the bottom of the chat when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="w-2/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600 text-2xl font-bold">Chat</h1>
      <div className="flex-1 overflow-y-auto p-5">
        {messages?.map((msg, index) => (
          <div
            key={msg?._id || index}
            className={`chat ${user?.firstName === msg?.firstName ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-header">
              {`${msg.firstName} ${msg.lastName}`}
              <time className="text-xs opacity-50"></time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">{msg.isSeen ? "Seen" : "Delivered"}</div>
          </div>
        ))}
        {/* Empty div for scrolling to the bottom */}
        <div ref={chatEndRef}></div>
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-1 border border-gray-500 text-white rounded p-2"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="btn bg-green-600 text-black p-2 py-1 px-4 font-semibold">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
