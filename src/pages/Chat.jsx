// src/components/Chat.jsx
import React, { useState } from "react";

function Chat({ user }) {
  const [messages, setMessages] = useState([
    {
      text: "Hi, thank for choosing Max Kennect",
      sender: "team",
      image: "/public/team1.jpg",
    },
    {
      text: "Hi, thank for choosing Max Kennect",
      sender: "user",
      image: "/public/user1.jpg",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          text: newMessage,
          sender: "user",
          image: user?.image || "default.jpg",
        },
      ]); // Use user image if available
      setNewMessage("");
    }
  };

  return (
    <div className="bg-black text-white p-4 flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Chat with the team
      </h2>
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex items-start">
              {message.sender === "team" && (
                <img
                  src={message.image}
                  alt="Team"
                  className="w-10 h-10 rounded-full mr-2"
                />
              )}
              <div
                className={`rounded-lg p-2 ${
                  message.sender === "user" ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                {message.text}
              </div>
              {message.sender === "user" && (
                <img
                  src={message.image}
                  alt="User"
                  className="w-10 h-10 rounded-full ml-2"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center bg-pink-500 rounded-lg p-2">
        <button className="text-white mr-2">🎤</button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write Something..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-300"
        />
        <button className="text-white ml-2">📎</button>
        <button className="text-white ml-2">📷</button>
        <button className="text-white ml-2">🙂</button>
        <button onClick={handleSendMessage} className="text-white ml-2">
          ➤
        </button>
      </div>
    </div>
  );
}

export default Chat;
