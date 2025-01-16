

import { Link } from "react-router-dom";


const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-lg bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col items-center">
        
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m0 0a9 9 0 11-4.477-7.794"
              />
            </svg>
          </div>


          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            Payment Successful!
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Thank you for your purchase. Your order has been confirmed.
          </p>

          <div className="mt-6 w-full">
            <h3 className="text-lg font-medium text-gray-700">Order Summary</h3>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Order ID:</span>
                <span>#12345678</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Amount Paid:</span>
                <span>$2100.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>


          <div className="mt-8 flex space-x-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Go to Home
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;


