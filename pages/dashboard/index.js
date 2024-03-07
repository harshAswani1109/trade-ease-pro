// components/PortfolioPage.js
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Chart } from "chart.js";

const PortfolioPage = () => {
  const portfolioData = [
    {
      id: 1,
      stockName: "AAPL",
      numberOfShares: 10,
      stockPrice: 1500,
      totalProfit: 5000,
    },
    // ... (other investment data)
  ];
  useEffect(() => {
    // Extracting relevant data for the chart
    const labels = portfolioData.map((investment) => investment.stockName);
    const investmentData = portfolioData.map(
      (investment) => investment.stockPrice
    );
    const profitData = portfolioData.map(
      (investment) => investment.totalProfit
    );

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          // {
          //   data: [86, 114, 106, 106, 107, 111, 133],
          //   label: "Applied",
          //   borderColor: "#3e95cd",
          //   backgroundColor: "#7bb6dd",
          //   fill: false,
          // },
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "AAPL Profit",
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            fill: false,
          },
          {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "Invested",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            fill: false,
          },
          // {
          //   data: [6, 3, 2, 2, 7, 0, 16],
          //   label: "Rejected",
          //   borderColor: "#c45850",
          //   backgroundColor: "#d78f89",
          //   fill: false,
          // },
        ],
      },
    });
  }, []);

  return (
    <>
      <div className="container mx-auto h-full mt-8 p-8 bg-white shadow-md rounded-md">
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
        {/* Add the Chart component here */}
        <div className="w-[1100px] h-screen flex mx-auto my-auto">
          <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl">
            <canvas id="myChart"></canvas>
          </div>
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
