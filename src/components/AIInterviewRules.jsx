


// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AIInterviewRules() {
//   const videoRef = useRef(null);
//   const [cameraAllowed, setCameraAllowed] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [interviewStarted, setInterviewStarted] = useState(false);
//   const navigate = useNavigate();

//   const rules = [
//     "Camera must be on throughout the interview.",
//     "Microphone should remain active for clear responses.",
//     "Ensure stable internet connection.",
//     "Use a laptop or desktop device.",
//     "Choose a quiet, distraction-free location.",
//     "Make sure your face is clearly visible.",
//     "Avoid background movements.",
//     "Do not switch tabs or applications.",
//     "No external help or devices allowed.",
//     "No chatting, calling, or messaging.",
//     "Keep your face in the camera frame."
//   ];

//   const requestCameraAndMic = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }
//       setCameraAllowed(true);
//     } catch {
//       alert("Camera and microphone access is required to proceed.");
//       setCameraAllowed(false);
//     }
//   };

//   const startInterview = () => {
//     if (!cameraAllowed) {
//       alert("Please allow camera and microphone access first.");
//       return;
//     }
//     if (inputValue.trim().toLowerCase() === "start") {
//       setInterviewStarted(true);
//       navigate("/interview-panel"); // Redirect to interview panel
//     } else {
//       alert("Please type 'start' in the box to begin.");
//     }
//   };

//   useEffect(() => {
//     requestCameraAndMic();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
//       <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-6">

//         {/* Rules Section */}
//         <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Interview Rules</h1>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//               {rules.map((rule, index) => (
//                 <li key={index} className="leading-relaxed">{rule}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Input Box + Start Button */}
//           <div className="mt-6 flex flex-col sm:flex-row gap-3">
//             <input
//               type="text"
//               placeholder="Type 'start' to begin interview"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               className="flex-1 border text-gray-600 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={startInterview}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
//             >
//               Start Interview
//             </button>
//           </div>

//           {interviewStarted && (
//             <p className="mt-4 text-green-600 font-semibold animate-pulse">
//               Redirecting to interview...
//             </p>
//           )}
//         </div>

//         {/* Camera Preview */}
//         <div className="lg:w-1/3 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center">
//           {cameraAllowed ? (
//             <video
//               ref={videoRef}
//               autoPlay
//               playsInline
//               muted
//               className="w-full h-80 rounded-xl border border-gray-300 object-cover shadow-md"
//             />
//           ) : (
//             <p className="text-gray-500 text-center px-4">
//               Please allow camera & microphone access to continue.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AIInterviewRules() {
  const videoRef = useRef(null);
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);
  const navigate = useNavigate();

  const rules = [
    "Camera must be on throughout the interview.",
    "Microphone should remain active for clear responses.",
    "Ensure stable internet connection.",
    "Use a laptop or desktop device.",
    "Choose a quiet, distraction-free location.",
    "Make sure your face is clearly visible.",
    "Avoid background movements.",
    "Do not switch tabs or applications.",
    "No external help or devices allowed.",
    "No chatting, calling, or messaging.",
    "Keep your face in the camera frame."
  ];

  const requestCameraAndMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraAllowed(true);
    } catch {
      alert("Camera and microphone access is required to proceed.");
      setCameraAllowed(false);
    }
  };

  const startInterview = () => {
    if (!cameraAllowed) {
      alert("Please allow camera and microphone access first.");
      return;
    }
    if (inputValue.trim().toLowerCase() === "start") {
      setInterviewStarted(true);
      navigate("/interview-panel"); // Redirect to interview panel
    } else {
      alert("Please type 'start' in the box to begin.");
    }
  };

  useEffect(() => {
    requestCameraAndMic();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] p-6 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-6 rounded-2xl  bg-[#0e1420]/70 border-2  border-[#1774f5] shadow-2xl shadow-blue-700 backdrop-blur-md">

        {/* Rules Section */}
        <div className="flex-1  rounded-2xl   p-10 flex flex-col justify-between ">
          <div> 
            <h1 className="text-4xl font-extrabold text-white mb-4">Interview <span className="text-blue-500">Rules</span></h1>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {rules.map((rule, index) => (
                <li key={index} className="leading-relaxed">{rule}</li>
              ))}
            </ul>
          </div>

          {/* Input Box + Start Button */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Type 'start' to begin interview"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 border border-gray-600 bg-[#1f2937] text-gray-200 placeholder-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={startInterview}
             className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
            >
              Start Interview
            </button>
          </div>

          {interviewStarted && (
            <p className="mt-4 text-green-400 font-semibold animate-pulse">
              Redirecting to interview...
            </p>
          )}
        </div>

        {/* Camera Preview */}
        <div className="lg:w-1/3   rounded-2xl  p-4 flex items-center justify-center  ">
          {cameraAllowed ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-80 rounded-xl border border-gray-600 object-cover shadow-lg"
            />
          ) : (
            <p className="text-gray-400 text-center px-4">
              Please allow camera & microphone access to continue.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
