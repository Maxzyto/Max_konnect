// src/components/Header.jsx
import React from "react";

function Header({ darkMode, setDarkMode, toggleSidebar }) {

  // Function to toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  }
  
  // Function to toggle sidebar visibility
  const handleSidebarToggle = () => {
    toggleSidebar();
  }


  return (
    <header className="bg-blue-800 p-2 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="font-bold text-xl">
        <img
          src="/public/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="rounded"
        />
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded p-2"
        />
        <button
          onClick={() => setDarkMode(!handleDarkModeToggle)}
          className="border rounded p-2 text-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button onClick={handleSidebarToggle} className="md:hidden text-white ">
          ☰
        </button>
        
        <button onClick={handleSidebarToggle} className="hidden md:block text-white"></button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
      </div>
    </header>
  );
}

export default Header;
