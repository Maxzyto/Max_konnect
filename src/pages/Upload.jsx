import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useFileStore from "../store/fileStore"; 
import {
  FaUpload,
  FaTimesCircle,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

// Helper to format bytes (reuse from store or define here)
const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals; 
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

function FileUploadPage() {
  const navigate = useNavigate();
  const { addTemporalFile, removeTemporalFile, confirmUpload, temporalFiles } =
    useFileStore();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadingId, setUploadingId] = useState(null); // Track which file is being "uploaded"
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFiles = useCallback(
    (files) => {
      setError("");
      setUploadingId(null); // Clear previous upload state
      if (!files || files.length === 0) return;

      // Basic validation (example: allow only PDFs and images)
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/gif",
      ];
      const file = files[0]; // Handle one file at a time for simplicity

      if (!allowedTypes.includes(file.type)) {
        setError(
          `Invalid file type: ${file.type}. Please upload PDF or image files.`
        );
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        // Example: 10MB limit
        setError(
          `File is too large: ${formatBytes(file.size)}. Maximum size is 10MB.`
        );
        return;
      }

      // Add to temporal store (in-memory simulation)
      addTemporalFile(file);
    },
    [addTemporalFile]
  );

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true); // Keep highlighting while dragging over
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
    // Reset file input to allow uploading the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveFile = (tempId) => {
    removeTemporalFile(tempId);
    if (uploadingId === tempId) setUploadingId(null); // Clear upload state if removing the uploading file
  };

  const handleConfirmUpload = async (tempId) => {
    setUploadingId(tempId); // Show spinner
    setError("");

 
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const receiptId = confirmUpload(tempId); // Process in store
    setUploadingId(null); 

    if (receiptId) {
      // Navigate to the generated receipt page
      navigate(`/receipts/${receiptId}`);
    } else {
      setError("Upload failed. Could not find the file reference.");
      // Keep the file in the temporal list for retry or removal if needed
    }
  };

  const temporalFileIds = Object.keys(temporalFiles); // Get current temporal file IDs

  return (
    <div className=" p-6 md:p-12 flex-1 bg-gray-50 ml-20 z-0 mt-12 rounded shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Upload Your Files
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Dropzone */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()} // Trigger file input click
        className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center cursor-pointer transition-colors duration-200 ${
          isDragging
            ? "border-cyan-500 bg-cyan-50"
            : "border-gray-300 hover:border-cyan-400 hover:bg-gray-100"
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          className="hidden"
          accept=".pdf, image/jpeg, image/png, image/gif" // Match allowed types
          id="file-upload"
          name="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="block text-gray-600 text-sm font-semibold mb-2"
        />
        <FaUpload
          className={`mx-auto text-4xl mb-3 ${
            isDragging ? "text-cyan-600" : "text-gray-400"
          }`}
        />
        <p className="text-lg font-semibold text-gray-700">
          {isDragging
            ? "Drop files here!"
            : "Drag & drop files here or click to browse"}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Supports: PDF, JPG, PNG, GIF (Max 10MB)
        </p>
        <p className="text-xs text-gray-500 mt-2">
          (Handles one file at a time in this demo)
        </p>
      </div>

      {/* Files Ready for Upload */}
      {temporalFileIds.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Files Ready to Upload:
          </h2>
          <ul className="space-y-3">
            {temporalFileIds.map((tempId) => {
              const item = temporalFiles[tempId];
              if (!item) return null; // Should not happen, but good practice
              const isCurrentlyUploading = uploadingId === tempId;
              return (
                <li
                  key={tempId}
                  className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md shadow-sm"
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    {/* Placeholder Icon - could show image thumbnail if desired */}
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
                      {item.type.split("/")[1]?.substring(0, 3).toUpperCase() ||
                        "FILE"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatBytes(item.size)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 flex-shrink-0">
                    {isCurrentlyUploading ? (
                      <FaSpinner className="animate-spin text-cyan-500 text-lg" />
                    ) : (
                      <>
                        <button
                          onClick={() => handleConfirmUpload(tempId)}
                          className="p-1 text-green-500 hover:text-green-700 transition-colors"
                          title="Confirm Upload"
                        >
                          <FaCheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleRemoveFile(tempId)}
                          className="p-1 text-red-500 hover:text-red-700 transition-colors"
                          title="Remove"
                        >
                          <FaTimesCircle className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileUploadPage;
