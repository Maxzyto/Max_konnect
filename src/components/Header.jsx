
import React from "react";
import { useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  


  
  // Function to toggle sidebar visibility
 const handleSidebarToggle = () => {
   setSidebarOpen(!isSidebarOpen);
   
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
       
      </div>
    </header>
  );
}

export default Header;
