// components/MonitorPopup.js
import React from "react";
import Modal from "../Modal";

const MonitorPopup = ({
  stockName,
  numberOfShares,
  stockPrice,
  onClose,
  symbol,
}) => {
  console.log(symbol, stockPrice);
  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Monitor Stock</h2>
          <Modal modalName={(symbol, stockPrice)} />
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
      <div className="absolute top-0 right-0 border-2 border-black bg-white h-40 w-40">
        Looking for pattern to invest
      </div>
      <div className="absolute bottom-0 right-0 border-2 border-black bg-white h-20 w-20">
        How it works
      </div>
    </>
  );
};

export default MonitorPopup;
