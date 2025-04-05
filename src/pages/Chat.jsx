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
      text: "Hi, thank for your service",
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMessages([
          ...messages,
          {
            text: `File uploaded: ${file.name}`,
            sender: "user",
            image: user?.image || "default.jpg",
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  }
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMessages([
          ...messages,
          {
            text: `Image uploaded: ${file.name}`,
            sender: "user",
            image: user?.image || "default.jpg",
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="flex w-1/2 mt-2 h-screen position:relative place-self-center mb-10 z-0">
      {/* Sidebar / Navbar */}
      <div className=" bg-gray-800 text-white "></div>

      {/* Main Chat Section */}
      <div className="flex-1 flex h-100% flex-col bg-black text-white">
        {/* Header */}
        <div className="bg-gray-900 p-4 shadow-md">
          <h2 className="text-xl font-semibold text-center">
            Chat with the team
          </h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
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

        {/* Input Section */}
        <div className="mt-4 flex items-center bg-pink-500 rounded-lg p-2">
          <button className="text-white mr-2">🎤</button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write Something..."
            onKeyDown={handleKeyPress}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-300"
          />
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={handleFileUpload}
          />
          <label
            htmlFor="file-upload"
            className="text-white ml-2 cursor-pointer"
          >
            📎
          </label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="image-upload"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="image-upload"
            className="text-white ml-2 cursor-pointer"
          >
            📷
          </label>
          <button className="text-white ml-2">🙂</button>
          <button onClick={handleSendMessage} className="text-white ml-2">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
