import React from "react";
import { useNavigate } from "react-router-dom";
import Receipt from './Receipt'; 
import { format } from "date-fns"; 

function History({ history }) {
  const navigate = useNavigate();

  const handleReceiptClick = (receipt) => {
    navigate("/Receipt", { state: { receipt } });
  };

return (
  <div className="bg-blue-100 p-60 mt-50 ml-10 place-self-center rounded shadow-md z-0">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center rounded sticky top-0 bg-white z-10">
      Print history
    </h2>
    <div className="bg-black text-white p-4 rounded-lg border-2 border-pink-400">
      <ul className="space-y-2">
        {history.map((item, index) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
          >
            <span className="mb-1 sm:mb-0">
              {index + 1}. {item.fileName}{" "}
              {item.date && (
                <span className="text-sm">
                  ({format(new Date(item.date), "yyyy-MM-dd HH:mm:ss")})
                </span>
              )}
            </span>
            <button
              onClick={() => handleReceiptClick(item)}
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              📄 View Receipt
            </button>
          </li>
        ))}
        {history.length === 0 && (
          <p className="text-gray-500 text-center">
            No print history available yet.
          </p>
        )}
      </ul>
    </div>
  </div>
);
}


export default History;
