import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FaChartLine } from "react-icons/fa"; // Import icons

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <nav
        className={`bg-black text-white w-60 h-full fixed top-0 left-0 py-6 px-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 md:h-[calc(100vh-4rem)] md:top-16`}
      >
        <ul className="flex flex-col h-full justify-between">
          <div className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="block p-2 hover:bg-blue-800 rounded-md"
                icon={<FaChartLine />}
              >
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
              <Link
                to="/chat"
                className="block p-2 hover:bg-blue-800 rounded-md"
              >
                Chat
              </Link>
            </li>
            <li>
              <Link
                to="/receipt"
                className="block p-2 hover:bg-blue-800 rounded-md"
              >
                Receipt
              </Link>
            </li>
          </div>

          <div className="pb-10">
            {user ? (
              <button
                onClick={onLogout}
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
    </>
  );
};

export default Navbar;
