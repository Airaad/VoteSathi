import React, { useState } from "react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOtp = () => {
    // Handle OTP sending logic here
    alert(`OTP sent to ${phoneNumber}`);
  };

  return (
    <div
      className="relative min-h-[81vh] flex items-center justify-center bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('https://a.travel-assets.com/findyours-php/viewfinder/images/res40/67000/67991-New-Delhi.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-12 pb-16 bg-white rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Enter your voter ID number
        </h1>
        <input
          type="text"
          placeholder="Enter your Voter ID"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleSendOtp}
          className="w-full bg-green-400 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default Login;
