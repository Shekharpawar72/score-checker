// src/pages/SupportDetail.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SupportDetail = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can send the form data to your backend/email service here
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-gray-200 px-6 py-12">
      {!submitted ? (
        <>
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">Support Request</h1>
            <p className="mt-4 text-gray-400 text-lg">
              Fill in your details below and our team will reach you within 12 hours.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto mt-12 bg-[#1a1f29] p-8 rounded-xl border border-gray-700 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Submit Your Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 rounded-lg bg-[#0b0f14] border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full mt-2 p-3 rounded-lg bg-[#0b0f14] border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              {/* Problem Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Problem Description
                </label>
                <textarea
                  rows="5"
                  placeholder="Describe your issue..."
                  className="w-full mt-2 p-3 rounded-lg bg-[#0b0f14] border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </>
      ) : (
        // ✅ Success Message
        <div className="max-w-2xl mx-auto bg-[#1a1f29] p-10 rounded-xl border border-gray-700 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-400">
            ✅ Message Sent!
          </h2>
          <p className="mt-4 text-gray-300">
            Thank you for reaching out. Our AI Interview Support team will get
            back to you within <span className="text-purple-400">12 hours</span>.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-500 transition"
            >
              Go Home
            </button>
            <button
              onClick={() => navigate("/support")}
              className="px-6 py-3 bg-gray-700 rounded-lg text-white font-semibold hover:bg-gray-600 transition"
            >
              Back to Support
            </button>
          </div>
        </div>
      )}

      {/* Optional: Back Link */}
      {!submitted && (
        <div className="text-center mt-8">
          <Link to="/support" className="text-purple-400 hover:underline">
            ← Back to Support
          </Link>
        </div>
      )}
    </div>
  );
};

export default SupportDetail;

