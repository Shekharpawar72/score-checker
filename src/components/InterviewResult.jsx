import { useLocation, useNavigate } from "react-router-dom";

export default function InterviewResult() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const score = state?.score ?? 0;

  // Basic feedback logic
  const getFeedback = (score) => {
    if (score >= 80) return "Excellent performance! You’re interview-ready.";
    if (score >= 60) return "Good job! A little more preparation and you’ll nail it.";
    return "Needs improvement. Focus on key concepts and try again.";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Interview Result</h1>
        <p className="text-4xl font-extrabold text-blue-600 mb-2">{score} / 100</p>
        <p className="text-gray-700 mb-6">{getFeedback(score)}</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate("/ai-interview-form")}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Retry Interview
          </button>
        </div>
      </div>
    </div>
  );
}
