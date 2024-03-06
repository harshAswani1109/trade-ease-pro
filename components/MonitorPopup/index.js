// components/MonitorPopup.js
import React from "react";

const MonitorPopup = ({ stockName, numberOfShares, stockPrice, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Monitor Stock</h2>
        <p>Stock Name: {stockName}</p>
        <p>Number of Shares: {numberOfShares}</p>
        <p>
          Stock Price:{" "}
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(stockPrice)}
        </p>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MonitorPopup;
