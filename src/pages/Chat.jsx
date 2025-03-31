import React from 'react'

const Chat = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">Chat</h1>
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Chat with Us</h2>
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring focus:ring-blue-300 mt-4"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
