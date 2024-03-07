// components/PortfolioPage.js
import React from "react";
import Link from "next/link";

const PortfolioPage = () => {
  // Sample data for previous investments
  const portfolioData = [
    {
      id: 1,
      stockName: "AAPL",
      numberOfShares: 10,
      stockPrice: 1500,
      totalProfit: 5000,
    },
    {
      id: 2,
      stockName: "GOOGL",
      numberOfShares: 8,
      stockPrice: 2800,
      totalProfit: 4000,
    },
    {
      id: 3,
      stockName: "AMZN",
      numberOfShares: 5,
      stockPrice: 3300,
      totalProfit: 3000,
    },
    // Add more investment data as needed
  ];

  return (
    <>
      {" "}
      <div className="container mx-auto h-screen mt-8 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-800">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioData.map((investment) => (
            <div
              key={investment.id}
              className="bg-blue-500 text-white p-4 rounded-md"
            >
              <p className="text-xl font-semibold text-red-500">
                {investment.stockName}
              </p>
              <p>Shares: {investment.numberOfShares}</p>
              <p className="">
                Total Profit:{" "}
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(investment.totalProfit)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/stockBuy" className="fixed z-10 bottom-8 right-8">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Invest More
        </button>
      </Link>
    </>
  );
};

export default PortfolioPage;
