// components/ProfitModal.js
import React, { useState } from "react";
import MonitorPopup from "../MonitorPopup"; // Import the new file

const ProfitModal = ({
  stockName,
  numberOfShares,
  stockPrice,
  onClose,
  onInvestMore,
}) => {
  const [showMonitorPopup, setShowMonitorPopup] = useState(false);

  const handleMonitorClick = () => {
    setShowMonitorPopup(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Trade Success</h2>
        <p>
          Congratulations! You have successfully traded {numberOfShares} shares
          of {stockName}.
        </p>
        <p>
          Total Amount Invested:{" "}
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(numberOfShares * stockPrice)}
        </p>
        <div className="flex justify-end mt-6">
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
            onClick={onInvestMore}
          >
            Invest More
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
            onClick={handleMonitorClick}
          >
            Monitor
          </button>
        </div>
      </div>

      {showMonitorPopup && (
        <MonitorPopup
          stockName={stockName}
          numberOfShares={numberOfShares}
          stockPrice={stockPrice}
          onClose={() => setShowMonitorPopup(false)}
        />
      )}
    </div>
  );
};

export default ProfitModal;
