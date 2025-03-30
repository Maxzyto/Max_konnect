import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout, }) => {
  return (
    <nav className="bg-black text-white w-60 h-[calc(100vh-4rem)] fixed top-16 left-0 py-6 px-4 overflow-y-auto">
      <ul className="flex flex-col h-full justify-between">
        <div className="space-y-4">
          <li>
            <Link to="/dashboard" className="block p-2 hover:bg-blue-800 rounded-md">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/history"
              className="block p-2 hover:bg-blue-800 rounded-md"
            >
              History
            </Link>
          </li>
          <li>
            <Link
              to="/upload"
              className="block p-2 hover:bg-blue-800 rounded-md"
            >
              Upload
            </Link>
          </li>
          <li>
            <Link to="/chat" className="block p-2 hover:bg-blue-800 rounded-md">
              Chat
            </Link>
          </li>
          <li>
            <Link
              to="/receipt" className="block p-2 hover:bg-blue-800 rounded-md">
              Receipt
            </Link>
          </li>
        </div>

        <div className="pb-10">
          {user ? (
            <button
              onClick={() => {
                onLogout();
              }}
              className="block w-full text-left p-2 hover:bg-blue-800 rounded-md"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="block p-2 hover:bg-blue-800 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
