import { useEffect, useRef, useState } from "react";

export default function AIInterviewRules() {
  const videoRef = useRef(null);
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);

  const rules = [
    "Camera Access – Candidates must keep their webcam turned on for the entire interview.",
    "Microphone Access – Microphone must remain active to record responses clearly.",
    "Stable Internet – Ensure a reliable internet connection to avoid interruptions.",
    "Device Requirement – Use a laptop or desktop; mobile devices may be restricted unless allowed.",
    "Quiet Location – Choose a distraction-free place with minimal background noise.",
    "Good Lighting – Ensure your face is clearly visible to the camera.",
    "No Background Movements – Avoid people moving in the background during the interview.",
    "No Switching Tabs/Apps – The system may detect and flag attempts to switch to other windows or applications.",
    "No External Help – You must not use any notes, phones, or external devices for assistance.",
    "No Unauthorized Communication – Do not chat, call, or message anyone during the interview.",
    "Face Visibility – Your face must remain visible in the frame throughout the session."
  ];

  const requestCameraAndMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraAllowed(true);
    } catch (err) {
      alert("Camera and microphone access is required to proceed.");
      setCameraAllowed(false);
    }
  };

  const startInterview = () => {
    if (inputValue.trim().toLowerCase() === "start" && cameraAllowed) {
      setInterviewStarted(true);
    } else if (!cameraAllowed) {
      alert("Please allow camera and microphone access first.");
    } else {
      alert('Please type "start" in the box to begin.');
    }
  };

  useEffect(() => {
    requestCameraAndMic();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center relative">
      {/* Camera Preview */}
      {cameraAllowed && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="fixed top-4 right-4 w-40 h-28 rounded-lg border-2 border-gray-300 shadow-lg object-cover"
        />
      )}

      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">AI Interview Rules & Regulations</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            type="text"
            placeholder="Type 'start' to begin interview"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={startInterview}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Start Interview
          </button>
        </div>

        {interviewStarted && (
          <p className="mt-4 text-green-600 font-semibold">Interview has started!</p>
        )}
      </div>
    </div>
  );
}
