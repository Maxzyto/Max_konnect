
import React from "react";
import { useNavigate } from "react-router-dom";

function Receipt({ receipt }) {
const navigate = useNavigate();
  

  const handlePrint = () => {
    window.print();
  };

  if (!receipt) {
    return (
      <div className="bg-white p-4 sm:p-6 w-1/2 rounded shadow-md ml-40 flex flex-col place-self-center z-0 mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          Print Receipt
        </h2>
        <p className="text-center text-gray-600">No receipt data available.</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/history")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to History
          </button>
        </div>
      </div>
    );
  }

  if (!receipt.fileName || !receipt.date) {
    return (
      <div className="bg-white p-4 sm:p-6 rounded shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          Receipt
        </h2>
        <p className="text-center text-red-600">Invalid receipt data.</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/history")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to History
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 mt-10 w-screen rounded shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Receipt
      </h2>
      <div className="border rounded p-4">
        <p>
          <strong>File Name:</strong> {receipt.fileName}
        </p>
        <p>
          <strong>Date:</strong> {receipt.date}
        </p>
        <p>
          <strong>Copies:</strong> {receipt.copies || "N/A"}
        </p>
        <p>
          <strong>Color:</strong> {receipt.color || "N/A"}
        </p>
        {/* will be adding more details in the feature */}
      </div>
      <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
        <button
          onClick={() => navigate("/history")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
        <button
          onClick={handlePrint}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Print
        </button>
      </div>
    </div>
  );
}

export default Receipt;
