import React from "react";
import { useNavigate } from "react-router-dom";
import Receipt from './Receipt';

function History({ history }) {
  const navigate = useNavigate();

  const handleReceiptClick = (receipt) => {
    navigate("/receipt", { state: { receipt } });
  };

   return (
        <div className="bg-white p-10 mt-12 ml-10 rounded shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Print history</h2>
            <div className="bg-gray-100 p-4 rounded-lg border-2 border-pink-400">
                <ul className="space-y-2">
                    {history.map((item, index) => (
                        <li key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <span className="mb-1 sm:mb-0">
                                {index + 1}. {item.fileName} <span className="text-sm">{item.date}</span>
                            </span>
                            <button
                                onClick={() => handleReceiptClick(item)}
                                className="text-red-500"
                            >
                                📄 {/* Changed icon to something more receipt-like */}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default History;
