// components/MonitorPopup.js
import React, { useState } from "react";
import Modal from "../Modal";

const MonitorPopup = ({
  stockName,
  numberOfShares,
  stockPrice,
  onClose,
  symbol,
}) => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const handleHowItWorksClick = () => {
    setShowHowItWorks(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Monitor Stock</h2>
          <Modal modalName={{ symbol, stockPrice }} />
          <p>Stock Name: {stockName}</p>
          <p>Number of Shares: {numberOfShares}</p>
          <p>
            Stock Price:
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
      <div className="absolute top-8 right-2   ">
        <button
          type="button"
          className="text-white flex gap-2   bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            className="animate-spin"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(2 2)" stroke-width="4">
                <circle
                  stroke-opacity=".5"
                  cx="18"
                  cy="18"
                  r="18"
                  className="text-white "
                ></circle>
                <path d="M36 18c0-9.94-8.06-18-18-18"></path>
              </g>
            </g>
          </svg>
          Looking for pattern to invest
        </button>
      </div>
      <div className="absolute bottom-8 right-8">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleHowItWorksClick}
        >
          Check Working
        </button>
      </div>

      {showHowItWorks && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <img
              src="https://bmf-bucket.s3.ap-south-1.amazonaws.com/match.jpg" // Replace with the actual path to your image
              alt="How it works"
              className="max-w-full max-h-full mb-4"
            />
            <p className="text-lg font-semibold">
              Rounding Bottom pattern detected, Start investing your Money
            </p>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green mt-4"
              onClick={() => setShowHowItWorks(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MonitorPopup;
