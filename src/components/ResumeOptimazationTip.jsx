import React from "react";

export default function ATSOptimizationPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
       <span className="text-blue-500 " >ATS Optimization</span>  Tips for Resumes
      </h1>
      <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
        A well-optimized resume can greatly increase your chances of passing
        through Applicant Tracking Systems (ATS). Here are key do’s and don’ts
        to make your resume job-specific and impactful.
      </p>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ✅ DO Section */}
        <div className="bg-gray-800 border-4 border-green-600 p-8 rounded-xl shadow-2xl shadow-green-500 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">✅ Do</h2>
          <ul className="space-y-4 text-gray-300 list-disc list-inside">
            <li>Use simple and professional fonts (Arial, Calibri, Times New Roman).</li>
            <li>Tailor your resume with keywords from the job description.</li>
            <li>Keep formatting clean with proper spacing and bullet points.</li>
            <li>Use reverse chronological order for work experience.</li>
            <li>Save your resume as a PDF unless specified otherwise.</li>
            <li>Highlight measurable achievements (e.g., "Increased sales by 30%").</li>
            <li>Use clear section headings: Experience, Education, Skills, etc.</li>
            <li>Include relevant technical and soft skills.</li>
            <li>Keep resume length 1–2 pages (depending on experience).</li>
            <li>Proofread for grammar and spelling errors.</li>
          </ul>
        </div>

        {/* ❌ DON’T Section */}
        <div className="bg-gray-800 border-4 border-red-600 p-8 rounded-xl shadow-2xl shadow-red-500 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">❌ Don’t</h2>
          <ul className="space-y-4 text-gray-300 list-disc list-inside">
            <li>Don’t use fancy templates with graphics or tables.</li>
            <li>Don’t include irrelevant work experience.</li>
            <li>Don’t use images, logos, or profile pictures.</li>
            <li>Don’t use uncommon fonts that ATS may not recognize.</li>
            <li>Don’t leave large gaps in work history unexplained.</li>
            <li>Don’t write long paragraphs — keep it concise.</li>
            <li>Don’t exaggerate or include false information.</li>
            <li>Don’t use slang, casual tone, or abbreviations.</li>
            <li>Don’t send the same resume to every job without changes.</li>
            <li>Don’t use colored backgrounds or borders.</li>
          </ul>
        </div>
      </div>

      {/* Resume Tools */}
      <div className="mt-16 bg-gray-800 p-8 rounded-3xl   shadow-2xl shadow-blue-700 backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          📌 Best Websites to Create  <span className="text-blue-500">ATS-Friendly Resumes</span>
        </h2>
        <ul className="space-y-4 text-gray-300 text-center">
          <li>
            <a
              href="https://resumeworded.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Resume Worded
            </a>{" "}
            – Get AI-powered resume feedback
          </li>
          <li>
            <a
              href="https://zety.com/resume-builder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Zety
            </a>{" "}
            – Professional resume builder with templates
          </li>
          <li>
            <a
              href="https://novoresume.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Novoresume
            </a>{" "}
            – Easy-to-use resume creator
          </li>
          <li>
            <a
              href="https://enhancv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Enhancv
            </a>{" "}
            – Build modern ATS-friendly resumes
          </li>
          <li>
            <a
              href="https://overleaf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Overleaf
            </a>{" "}
            – Create LaTeX-based professional resumes
          </li>
        </ul>
      </div>
    </div>
  );
}
