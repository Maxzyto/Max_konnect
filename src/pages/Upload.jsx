// src/components/Upload.jsx
import React, { useState, useRef } from "react";

function Upload({ onUploadComplete }) {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length > 0) {
      files.forEach((file) => {
        const fileDetails = {
          fileName: file.name,
          date: new Date().toLocaleDateString(),
          id: Date.now(),
        };
        onUploadComplete(fileDetails);
      });
      setFiles([]); // Clear the files after upload
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded shadow-md">
      {" "}
      {/* Add responsive padding */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Upload all you files here for printing
      </h2>{" "}
      {/* Responsive font size */}
      <div
        className="border-2 border-dashed rounded p-4 sm:p-8 mb-4 flex flex-col items-center justify-center" // Responsive padding
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
            {" "}
            {/* Responsive size */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" // Responsive size
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L4 8m4-4v12"
              />
            </svg>
          </div>
          <p className="mb-2">Drag and Drop files to upload</p>
          <button
            onClick={handleBrowseClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Browse
          </button>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <p className="mt-2 text-sm text-gray-500">
            Supported files: AI, PSD, PDF, JPEG, Word, EXL, and PNG
          </p>
        </div>
      </div>
      {files.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Uploading files</h3>
          <ul>
            {files.map((file, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-2"
              >
                {" "}
                {/* Responsive flex direction */}
                <span className="flex items-center mb-1 sm:mb-0">
                  {" "}
                  {/* Responsive margin */}
                  {file.type.includes("pdf") && (
                    <span className="text-red-500 mr-2">PDF</span>
                  )}
                  {file.type.includes("image") && (
                    <span className="text-orange-500 mr-2">IMG</span>
                  )}
                  {file.type.includes("photoshop") && (
                    <span className="text-blue-500 mr-2">PS</span>
                  )}
                  {file.name}
                </span>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-500"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default Upload;
