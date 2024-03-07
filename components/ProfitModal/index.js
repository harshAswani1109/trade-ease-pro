// components/ProfitModal.js
import React, { useState } from "react";
import MonitorPopup from "../MonitorPopup"; // Import the new file

const ProfitModal = ({
  stockName,
  numberOfShares,
  stockPrice,
  onClose,
  onInvestMore,
  symbol,
}) => {
  const [showMonitorPopup, setShowMonitorPopup] = useState(false);

  const handleMonitorClick = () => {
    setShowMonitorPopup(true);
  };

  console.log(symbol);

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
            onClick={onClose}
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
          symbol={symbol}
        />
      )}
    </div>
  );
};

export default ProfitModal;
<button
  type="button"
  class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>
  Teal
</button>;
