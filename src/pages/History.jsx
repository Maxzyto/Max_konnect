import React from "react";
import { useNavigate } from "react-router-dom";
import Receipt from './Receipt'; 

function History({ history }) {
  const navigate = useNavigate();

  const handleReceiptClick = (receipt) => {
    navigate("/Receipt", { state: { receipt } });
  };

return (
      <div className="bg-blue-100 p-60 mt-50 ml-10 place-self-center rounded shadow-md z-0">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sticky top-0 bg-white z-10">Print history</h2>
            <div className="bg-black text-white p-4 rounded-lg border-2 border-pink-400">
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
                                      📄 
                                 </button>
                            </li>
                      ))}
                 </ul>
            </div>
      </div>
 );
}


export default History;
