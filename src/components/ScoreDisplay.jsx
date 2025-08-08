import React from 'react';
import { 
  Trophy, 
  Target, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  TrendingUp,
  Star,
  Award,
  BookOpen,
  Zap
} from 'lucide-react';

const ScoreDisplay = ({ analysis }) => {
  if (!analysis) return null;

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBackground = (score) => {
    if (score >= 80) return 'bg-green-500/20';
    if (score >= 60) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  const ScoreCircle = ({ score, label }) => (
    <div className="text-center transform hover:scale-105 transition-transform duration-300">
      <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center ${getScoreBackground(score)} mx-auto mb-3 shadow-lg border-4 border-gray-700/50 backdrop-blur-sm`}>
        <span className={`text-xl sm:text-2xl lg:text-3xl font-bold ${getScoreColor(score)}`}>
          {score}
        </span>
      </div>
      <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-300">{label}</p>
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 sm:px-0">
      {/* Overall Score */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-700/50">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 mb-4 flex items-center justify-center">
            <Trophy className="mr-3 text-yellow-400" size={window.innerWidth < 640 ? 28 : 32} />
            ATS Resume Score
          </h2>
          <div className={`inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full ${getScoreBackground(analysis.overallScore)} mb-4 sm:mb-6 shadow-2xl border-8 border-gray-700/50 transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm`}>
            <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${getScoreColor(analysis.overallScore)}`}>
              {analysis.overallScore}
            </span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            {analysis.overallScore >= 80 ? 'Excellent match! 🎉' : 
             analysis.overallScore >= 60 ? 'Good match with room for improvement 👍' : 
             'Needs significant improvement 📈'}
          </p>
        </div>

        {/* Detailed Scores */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <ScoreCircle score={analysis.skillsMatch} label="Skills Match" />
          <ScoreCircle score={analysis.experienceMatch} label="Experience" />
          <ScoreCircle score={analysis.educationMatch} label="Education" />
          <ScoreCircle score={analysis.keywordDensity} label="Keywords" />
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Strengths */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center text-green-400">
            <div className="p-2 bg-green-500/20 rounded-xl mr-3">
              <CheckCircle size={24} />
            </div>
            Strengths
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            {analysis.strengths?.map((strength, index) => (
              <li key={index} className="flex items-start space-x-3 p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                <Star className="text-green-400 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center text-red-400">
            <div className="p-2 bg-red-500/20 rounded-xl mr-3">
              <AlertTriangle size={24} />
            </div>
            Areas for Improvement
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            {analysis.improvements?.map((improvement, index) => (
              <li key={index} className="flex items-start space-x-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                <TrendingUp className="text-red-400 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Missing Keywords */}
      {analysis.missingKeywords && analysis.missingKeywords.length > 0 && (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center text-blue-400">
            <div className="p-2 bg-blue-500/20 rounded-xl mr-3">
              <BookOpen size={24} />
            </div>
            Missing Keywords
          </h3>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Consider adding these keywords to improve your ATS score:
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {analysis.missingKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {analysis.recommendations && (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center text-purple-400">
            <div className="p-2 bg-purple-500/20 rounded-xl mr-3">
              <Zap size={24} />
            </div>
            Recommendations
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {analysis.recommendations.map((recommendation, index) => (
              <div key={index} className="p-4 sm:p-6 bg-purple-500/10 rounded-2xl border-l-4 border-purple-400 shadow-sm hover:shadow-md transition-shadow duration-200">
                <h4 className="font-medium text-purple-300 mb-2 sm:mb-3 text-sm sm:text-base">{recommendation.title}</h4>
                <p className="text-purple-400 text-sm sm:text-base leading-relaxed">{recommendation.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      {analysis.summary && (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-300">
            <div className="p-2 bg-gray-600/30 rounded-xl mr-3">
              <Award size={24} />
            </div>
            Summary
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">{analysis.summary}</p>
        </div>
      )}
    </div>
  );
};

export default ScoreDisplay;
