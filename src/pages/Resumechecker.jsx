


import React from "react";
import myLogo from "../assets/resumeimgage.png";
import cardImage1 from "../assets/card-1.svg"; // replace with your actual image
import cardImage2 from "../assets/card-2.svg"; // replace with your actual image
import { useNavigate } from "react-router-dom";
import ResumeScoreChecker from "../components/ResumeScoreChecker";


export default function ATSMainSection() {
     const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] min-h-screen flex items-center justify-center  px-6 py-12">
    
      <div className="max-w-6xl w-full bg-[#111827] rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-blue-700 backdrop-blur-md ">
        {/* Header Section */}
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight">
              ATS   <span className="text-blue-500">Resume</span> Optimizer
            </h2>
            <p className="mt-4 text-gray-400 text-shadow-2xs">
              Get real-time feedback on your resume’s ATS compatibility. Improve
              keyword usage, formatting, and structure to maximize your chances
              of landing interviews.
            </p>

            <button onClick={() => navigate("/resume-score-checker")}
              className="mt-6 px-6 py-3 bg-blue-600 text-white 
                hover:bg-white hover:text-blue-600
                border border-blue-600 
                transition rounded-3xl font-medium"
            >
              Try ATS Checker
            </button>
          </div>

          {/* Illustration (Right Side) */}
          <div className="hidden lg:block">
            <img
              src={myLogo}
              alt="ATS Illustration"
              className="w-92 drop-shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_10px_25px_rgba(59,130,246,0.7)]"
            />
          </div>
        </div>

        {/* Inner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Card 1 */}
          <div
            className="relative bg-[#0D1B2A] p-6 rounded-2xl shadow-lg flex items-center gap-6
            transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 
            before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-transparent 
            hover:before:border-blue-500 before:transition-all before:duration-500
            hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          >
            {/* Left Image */}
            <img
              src={cardImage1}
              alt="Keyword Match"
              className="w-20 h-20 object-contain z-10"
            />
            {/* Right Content */}
            <div className="z-10">
              <h3 className="text-lg font-semibold">Tailored Resume Suggestions</h3>
              <p className="text-gray-400 mt-2 text-sm">
           Get AI-powered suggestions to make your resume job-specific.
              </p>
              <button  onClick={() => navigate("/suggestions")}
               className="mt-4 px-4 py-2 bg-[#1F2937] hover:bg-white hover:text-blue-600 border border-blue-600 transition rounded-lg text-sm font-medium">
                Get Suggestions
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-[#0D1B2A] p-6 rounded-2xl shadow-lg flex items-center gap-6
            transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 
            before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-transparent 
            hover:before:border-blue-500 before:transition-all before:duration-500
            hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          >
            {/* Left Image */}
            <img
              src={cardImage2}
              alt="Optimization Tips"
              className="w-20 h-20 object-contain z-10"
            />
            {/* Right Content */}
            <div className="z-10">
              <h3 className="text-lg font-semibold">ATS Optimization Tips</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Get suggestions to improve formatting, fix structure issues, and
                raise your ATS score.
              </p>
              <button  onClick={() => navigate("/resume-optimization-tips")}
               className="mt-4 px-4 py-2 bg-[#1F2937] hover:bg-white hover:text-blue-600 border border-blue-600 transition rounded-lg text-sm font-medium">
                View Tips
              </button>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
}

