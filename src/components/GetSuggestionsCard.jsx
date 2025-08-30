import React from "react";
import { Lightbulb, Upload, FileCheck, Wand2 } from "lucide-react";

export default function ResumeSuggestionsDoc() {
  return (
    <div className="min-h-screen bg-[#050B17] text-white p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-8 h-8 text-yellow-400" />
        <h1 className="text-3xl font-bold">AI-Powered Resume Suggestions</h1>
      </div>

      {/* Tagline */}
      <p className="text-gray-300 max-w-2xl mb-10 text-lg">
        Get AI-powered suggestions to make your resume job-specific.  
        Our system analyzes job descriptions and gives you tailored recommendations
        to improve your chances of landing interviews.
      </p>

      {/* Step-by-step Guide */}
      <div className="grid gap-6 max-w-3xl">
        {/* Step 1 */}
        <div className="flex items-start gap-4 p-5 bg-blue-900/30 border border-blue-600 rounded-xl">
          <Upload className="w-7 h-7 text-blue-400 mt-1" />
          <div>
            <h2 className="text-xl font-semibold">Step 1: Upload Your Resume</h2>
            <p className="text-gray-300">
              Start by uploading your resume in PDF or DOCX format.  
              The AI will scan your content for key skills and structure.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4 p-5 bg-blue-900/30 border border-blue-600 rounded-xl">
          <Wand2 className="w-7 h-7 text-purple-400 mt-1" />
          <div>
            <h2 className="text-xl font-semibold">Step 2: AI Analysis</h2>
            <p className="text-gray-300">
              The AI compares your resume with the job description to find missing
              keywords, role-specific skills, and areas for improvement.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4 p-5 bg-blue-900/30 border border-blue-600 rounded-xl">
          <FileCheck className="w-7 h-7 text-green-400 mt-1" />
          <div>
            <h2 className="text-xl font-semibold">Step 3: Get Suggestions</h2>
            <p className="text-gray-300">
              You’ll receive clear, actionable suggestions to enhance your resume.  
              Add measurable achievements, job-specific keywords, and improve formatting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
