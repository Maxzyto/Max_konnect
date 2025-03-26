// src/components/Header.jsx
import React from "react";

function Header({ darkMode, setDarkMode }) {
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
          onClick={() => setDarkMode(!darkMode)}
          className="border rounded p-2"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;
