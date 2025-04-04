import React from "react";
import { useNavigate } from "react-router-dom";
import Receipt from './Receipt';

function History({ history = [], onDelete }) {
  const navigate = useNavigate();

  const handleReceiptClick = (receipt) => {
    navigate("./Receipt.jsx", { state: { receipt } });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Print History
      </h2>
      {history.length === 0 ? (
        <p className="text-gray-500 text-center">No print history available.</p>
      ) : (
        <div className="bg-gray-100 p-4 rounded-lg border-2 border-pink-400">
          <ul className="space-y-3">
            {history.map((item, index) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-2"
              >
                <div>
                  <span className="font-medium">
                    {index + 1}. {item.fileName}
                  </span>
                  <span className="text-sm text-gray-500 block sm:inline ml-2">
                    {item.date}
                  </span>
                </div>
                <div className="flex space-x-4 mt-2 sm:mt-0">
                  <button
                    onClick={() => handleReceiptClick(item)}
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    View Receipt
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default History;
