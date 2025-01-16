const PaymentCancel = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-lg bg-white shadow-md rounded-lg p-8">
          <div className="flex flex-col items-center">
            {/* Cancel Icon */}
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
  
            {/* Cancel Message */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              Payment Canceled
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Your payment process was not completed. If this was a mistake, you
              can retry the payment or return to the home page.
            </p>
  
            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => (window.location.href = "/retry-payment")}
                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Retry Payment
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PaymentCancel;