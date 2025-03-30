// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-800 p-4 flex justify-center text-white fixed bottom-0 w-full">
      <div className="flex space-x-4 items-center">
        <a
          href="mailto:konnectmax@gmail.com"
          className="text-white hover:underline "
        >
          konnectmax@gmail.com
        </a>
        <a
          href="https://www.youtube.com/@maxkonnect"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          <img src="youtube.png" alt="youtube" className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com/max_1gh"
          className="text-white hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          @max_1gh
        </a>
      </div>
    </footer>
  );
}

export default Footer;
