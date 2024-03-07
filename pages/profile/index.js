import AddFundsModal from "@/components/FundModel";
import React, { useState } from "react";

export default function Profile() {
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);

  const handleAddFundsClick = () => {
    setShowAddFundsModal(true);
  };

  const handleCloseModal = () => {
    setShowAddFundsModal(false);
  };

  return (
    <>
      <div className="flex h-screen absolute flex-col w-full items-center">
        <div className="h-[30vh] w-[80vw] z-10">
          <div className="flex justify-between items-center mt-20">
            <div className="h-60 w-60 rounded-full overflow-hidden border-2">
              <img src="https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg" />
            </div>
            <div className="text-3xl font-bold tracking-widest">
              Saransh Jadhav || 462983694
            </div>
          </div>
        </div>
        <div className="h-[70vh] w-full bg-primary p-8 flex justify-center items-center flex-row">
          <div className="bg-white p-8 rounded-md shadow-md flex-col">
            <h2 className="text-2xl font-semibold mb-4">Add Funds :-</h2>

            {/* Options for adding funds */}
            <div className="grid grid-cols-2 gap-x-20">
              <button className="bg-blue-500 w-64 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mb-4">
                PhonePe
              </button>

              <button className="bg-red-500 w-64 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red mb-4">
                Google Pay
              </button>

              <button className="bg-indigo-500 w-64 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo mb-4">
                Net Banking
              </button>
              <button className="bg-blue-500 w-64 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mb-4">
                Credit Card
              </button>

              <button className="bg-red-500 w-64 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red mb-4">
                Debit Card
              </button>

              <button className="bg-indigo-500 w-64 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo mb-4">
                Paytm
              </button>
            </div>
            {/* Close button */}
            {/* <button
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
              onClick={onClose}
            >
              Close
            </button> */}
          </div>

          {/* Add Funds Modal */}
          {showAddFundsModal && <AddFundsModal onClose={handleCloseModal} />}

          {/* <div className="mb-4">
            <span className="text-lg font-semibold text-white">
              Set balance not to exceed:
            </span>
            <input
              type="number"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter maximum balance"
            />
          </div> */}
        </div>
      </div>
      <div className="mb-4 absolute top-20 right-8">
        <span className="text-xl font-semibold text-black">
          Account Balance:
        </span>
        <span className="text-3xl font-bold text-green-500 ml-2">
          100,001 rs
        </span>
      </div>
    </>
  );
}
