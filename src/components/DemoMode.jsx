import React, { useState } from 'react';
import { Play, AlertCircle, Key, ExternalLink } from 'lucide-react';
import { getDemoAnalysis } from '../services/geminiService';
import ScoreDisplay from './ScoreDisplay';

const DemoMode = ({ onAnalyze }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [demoAnalysis, setDemoAnalysis] = useState(null);

  const handleDemoAnalysis = () => {
    const analysis = getDemoAnalysis();
    setDemoAnalysis(analysis);
    setShowDemo(true);
  };

  const handleTryWithAPI = () => {
    setShowDemo(false);
    setDemoAnalysis(null);
    onAnalyze();
  };

  if (showDemo && demoAnalysis) {
    return (
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-4 sm:p-6 mx-4 sm:mx-0 shadow-lg backdrop-blur-sm">
          <div className="flex items-center space-x-3 mb-3">
            <AlertCircle className="text-blue-400" size={24} />
            <span className="text-blue-300 font-semibold text-lg">Demo Mode</span>
          </div>
          <p className="text-blue-300 text-sm sm:text-base">
            This is a sample analysis showing how the application works. Configure your Gemini API key for personalized analysis of your actual resume.
          </p>
        </div>
        
        <ScoreDisplay analysis={demoAnalysis} />
        
        <div className="text-center space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center px-4 sm:px-0">
          <button
            onClick={() => setShowDemo(false)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Upload
          </button>
          <button
            onClick={handleTryWithAPI}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Configure API Key
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-center mx-4 sm:mx-0 border border-gray-700/50">
      <div className="mb-6 sm:mb-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Key className="text-white" size={window.innerWidth < 640 ? 32 : 40} />
        </div>
        <AlertCircle className="mx-auto text-yellow-400 mb-4 sm:mb-6" size={window.innerWidth < 640 ? 40 : 48} />
      </div>
      
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        API Key Required
      </h3>
      
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        To analyze your resume with personalized AI insights, please configure your Gemini API key in the .env file.
      </p>
      
      <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm">
        <h4 className="text-blue-300 font-semibold mb-3 text-sm sm:text-base">How to get your API key:</h4>
        <ol className="text-blue-400 text-xs sm:text-sm text-left space-y-2 max-w-md mx-auto">
          <li className="flex items-start space-x-2">
            <span className="bg-blue-500/30 text-blue-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
            <span>Visit Google AI Studio</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="bg-blue-500/30 text-blue-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
            <span>Create a free API key</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="bg-blue-500/30 text-blue-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
            <span>Add it to your .env file</span>
          </li>
        </ol>
        <a
          href="https://makersuite.google.com/app/apikey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
        >
          <ExternalLink size={16} />
          <span>Get API Key</span>
        </a>
      </div>
      
      <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
        Or try the demo mode to see how the application works:
      </p>
      
      <div className="space-y-4">
        <button
          onClick={handleDemoAnalysis}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 flex items-center space-x-3 mx-auto shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          <Play size={20} />
          <span className="text-sm sm:text-base">Try Demo Mode</span>
        </button>
        <div className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
          <p>Demo mode shows sample analysis results to demonstrate the application's capabilities</p>
        </div>
      </div>
    </div>
  );
};

export default DemoMode;
