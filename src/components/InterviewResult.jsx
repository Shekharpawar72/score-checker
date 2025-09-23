import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import { Download, Share2, Globe, Home, RotateCcw } from "lucide-react";

export default function InterviewResult() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const score = state?.score ?? 0;

  // Feedback logic
  const getFeedback = (score) => {
    if (score >= 80) return "🌟 Excellent performance! You’re interview-ready.";
    if (score >= 60) return "👍 Good job! A little more preparation and you’ll nail it.";
    return "⚠️ Needs improvement. Focus on key concepts and try again.";
  };

  // Download as PDF
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Interview Result", 20, 20);
    doc.setFontSize(14);
    doc.text(`Score: ${score} / 100`, 20, 40);
    doc.text(`Feedback: ${getFeedback(score)}`, 20, 60);
    doc.save("Interview_Result.pdf");
  };

  // Share link
  const handleShare = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    alert("Link copied! Share with your friends.");
  };

  // Post for others
  const handlePost = () => {
    alert("✅ Your result has been posted for others to see!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] flex flex-col items-center justify-center px-4">
      {/* Result Card */}
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-full max-w-lg border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Interview Result</h1>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 px-4 rounded-xl shadow-lg mb-6">
          <p className="text-lg font-medium">Your Score</p>
          <p className="text-5xl font-extrabold mt-2">{score} / 100</p>
        </div>

        <p className="text-gray-700 text-lg mb-8">{getFeedback(score)}</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <Home size={18} /> Home
          </button>
          <button
            onClick={() => navigate("/ai-interview-form")}
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <RotateCcw size={18} /> Retry
          </button>
        </div>
      </div>

      {/* Actions Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 mt-8 w-full max-w-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-5 text-gray-800 text-center">
          📤 Share Your Result
        </h2>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            <Download size={18} /> Download as PDF
          </button>
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            <Share2 size={18} /> Copy Share Link
          </button>
          <button
            onClick={handlePost}
            className="flex items-center justify-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            <Globe size={18} /> Post Publicly
          </button>
        </div>
      </div>
    </div>
  );
}
