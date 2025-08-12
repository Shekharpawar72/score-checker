import { useState } from 'react'
import './App.css'
import ResumeScoreChecker from './components/ResumeScoreChecker'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AIInterviewForm from './components/AIInterviewForm';
import AIInterviewRules from './components/AIInterviewRules';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500/10 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-pink-500/10 rounded-full opacity-20 animate-pulse delay-500"></div>
        
        {/* Additional dark theme decorative elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-600/5 to-cyan-600/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 w-full max-w-none px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-6 overflow-y-auto">
          <header className="text-center mb-4 sm:mb-6 lg:mb-8">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-transform duration-300">
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2 sm:mb-3">
              ATS Resume Score Checker
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Optimize your resume for Applicant Tracking Systems using AI-powered analysis
            </p>
            
            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 lg:gap-3 mt-3 sm:mt-4 lg:mt-6">
              <span className="px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-blue-500/20">
                🤖 AI-Powered
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm text-purple-300 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-purple-500/20">
                📊 Detailed Analysis
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm text-indigo-300 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-indigo-500/20">
                ⚡ Instant Results
              </span>
            </div>
          </header>
          
          <ResumeScoreChecker />
          
 <Router>
      <Routes>
    
        <Route path="/" element={<AIInterviewForm />} />
            <Route path="/rules" element={<AIInterviewRules />} />
      </Routes>
    </Router>
        </div>
      </div>
    </div>
  )
}

export default App
  