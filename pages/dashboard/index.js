import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal"; // Create a Modal component
import { useInterval } from "@/pages/utils";

const InvestmentPage = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [numberOfShares, setNumberOfShares] = useState("");
  const [startTradingStatus, setStartTradingStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Replace this with your logic to fetch real-time stock data
  const fetchStockData = () => {
    // Example: Fetch stock data from an API or use a simulation
    // In a real application, this data would come from an API or some other source
    const newStockPrice = Math.random() * 10 + 1500; // Replace with your real data
    return newStockPrice;
  };

  useEffect(() => {
    // Disable "Start Trading" button if no stock is selected or no shares input
    const isDisabled = !selectedStock || !numberOfShares || numberOfShares <= 0;
    setStartTradingStatus(
      isDisabled
        ? "Please select stock and enter valid number of shares."
        : null
    );
  }, [selectedStock, numberOfShares]);

  const handleStartTrading = () => {
    // Perform any actions related to starting trading with the selected stock and number of shares
    // For demonstration, just display a success message
    setStartTradingStatus("We will make profit for you.");

    // Optionally, you can set up additional logic or API calls here
    // ...

    // Open the modal after a short delay
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  const handleInvestMore = () => {
    // Reset input values for the next investment
    setSelectedStock("");
    setInvestmentAmount("");
    setNumberOfShares("");
    setStartTradingStatus(null);
  };

  const handleCloseModal = () => {
    // Close the modal and reset input values for the next investment
    setShowModal(false);
    setSelectedStock("");
    setInvestmentAmount("");
    setNumberOfShares("");
    setStartTradingStatus(null);
  };

  //   useInterval(() => {
  //     // Fetch real-time stock data using the utility function
  //     const newStockPrice = fetchStockData();
  //     setInvestmentAmount((prevAmount) =>
  //       numberOfShares ? newStockPrice * numberOfShares : prevAmount
  //     );
  //   }, 5000); // Fetch data every 5 seconds (adjust as needed)

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-800">
        Investment Page
      </h2>

      <div className="mb-4">
        <label
          htmlFor="stock"
          className="block text-sm font-medium text-gray-600"
        >
          Select Stock
        </label>
        <select
          id="stock"
          value={selectedStock}
          onChange={(e) => setSelectedStock(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
        >
          <option value="" disabled>
            Select a stock
          </option>
          <option value="AAPL">AAPL - Apple Inc.</option>
          <option value="GOOGL">GOOGL - Alphabet Inc.</option>
          <option value="AMZN">AMZN - Amazon.com Inc.</option>
          {/* Add more stock options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="numberOfShares"
          className="block text-sm font-medium text-gray-600"
        >
          Number of Shares
        </label>
        <input
          type="number"
          id="numberOfShares"
          value={numberOfShares}
          onChange={(e) => setNumberOfShares(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
          placeholder="Enter number of shares"
        />
      </div>

      <button
        onClick={handleStartTrading}
        disabled={startTradingStatus !== null}
        className={`bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo ${
          startTradingStatus !== null && "opacity-50 cursor-not-allowed"
        }`}
      >
        Start Trading
      </button>

      {startTradingStatus && (
        <p className="mt-4 text-red-600">{startTradingStatus}</p>
      )}

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-2xl font-semibold mb-4">Profit Details</h2>
          <p>{`Stock: ${selectedStock}`}</p>
          <p>{`Stock Price: ${investmentAmount / numberOfShares} INR`}</p>
          <p>{`Total Investment: ${investmentAmount} INR`}</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleInvestMore}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo mr-2"
            >
              Invest More
            </button>
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default InvestmentPage;
