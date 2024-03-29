import React, { useState } from "react";
import ProfitModal from "@/components/ProfitModal";

const InvestmentPage = () => {
  const initialFormState = {
    selectedStock: "",
    numberOfShares: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [showModal, setShowModal] = useState(false);
  const [profitModalData, setProfitModalData] = useState({});

  // Example list of stocks with their prices
  const stockOptions = [
    { name: "AAPL - Apple Inc.", price: 13987, symbol: "NASDAQ:AAPL" },
    { name: "Meta - NASDAQ:META", price: 41056, symbol: "NASDAQ:META" },
    { name: "Gold - TVC Gold", price: 65263, symbol: "TVC:GOLD" },
    // {
    //   name: "MSFT - Microsoft Corporation",
    //   price: 2500,
    //   symbol: "NASDAQ:AAPL",
    // },
    // { name: "TSLA - Tesla Inc.", price: 2000, symbol: "NASDAQ:AAP" },
    // Add more stock options as needed
  ];

  const handleStartTrading = () => {
    // Replace this logic with your actual trading logic
    // For demonstration, we'll simulate a successful trade
    setShowModal(true);
    setProfitModalData({
      stockName: formData.selectedStock,
      numberOfShares: formData.numberOfShares,
      stockPrice:
        stockOptions.find((stock) => stock.name === formData.selectedStock)
          ?.price || 0,

      symbol:
        stockOptions.find((stock) => stock.name === formData.selectedStock)
          ?.symbol || "NASDAQ:AAPL",
    });

    // Reset the form after submission
    setFormData({ ...initialFormState });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="h-screen container mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
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
          name="selectedStock"
          value={formData.selectedStock}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
        >
          <option value="" disabled>
            Select a stock
          </option>
          {stockOptions.map((stock) => (
            <option key={stock.name} value={stock.name}>
              {`${stock.name} - ${stock.price} INR`}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="numberOfShares"
          className="block text-sm font-medium text-gray-600"
        >
          Enter Number of Shares
        </label>
        <input
          type="number"
          id="numberOfShares"
          name="numberOfShares"
          value={formData.numberOfShares}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
          placeholder="Enter number of shares"
        />
      </div>

      <button
        onClick={handleStartTrading}
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
      >
        Start Trading
      </button>

      {showModal && (
        <ProfitModal
          stockName={profitModalData.stockName}
          numberOfShares={profitModalData.numberOfShares}
          stockPrice={profitModalData.stockPrice}
          symbol={profitModalData.symbol}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default InvestmentPage;
