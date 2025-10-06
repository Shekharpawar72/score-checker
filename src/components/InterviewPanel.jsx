// import { useEffect, useRef, useState, useCallback } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// // Import LoaderCircle for a better user experience
// import {
//   PhoneOff,
//   Mic,
//   MicOff,
//   Volume2,
//   LoaderCircle,
//   ShieldAlert,
// } from "lucide-react";
// import Interviewpanel from "../assets/Interviewpanel.mp4";

// export default function InterviewPanel() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Destructure sessionId from location.state, where it's passed from the previous page.
//   const { questions, duration, sessionId } = location.state || {
//     questions: [],
//     duration: 30,
//     sessionId: null, // Default to null if not provided
//   };

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [timeLeft, setTimeLeft] = useState(
//     duration ? Number(duration) * 60 : 60 * 5
//   );
//   const [listening, setListening] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   // Declare the isAnalyzing state to track the loading status.
//   const [isAnalyzing, setIsAnalyzing] = useState(false);

//   // Proctoring State
//   const [warnings, setWarnings] = useState(0);
//   // const [proctoringModelIsLoaded, setproctoringModelIsLoaded] = useState(false);
//   const [userStream, setUserStream] = useState(null);
//   const MAX_WARNINGS = 3;

//   const recognitionRef = useRef(null);
//   const userVideoRef = useRef(null);
//   const currentQuestionIndex = useRef(0);
//   const fullTranscriptRef = useRef("");
//   const isManuallyStopped = useRef(false);

//   // Proctoring Ref
//   const detectionIntervalRef = useRef(null);
//   const warningInProgress = useRef(false);
//   const lastWarningReasonRef = useRef("");

//   // --- PROCTORING LOGIC ---
//   useEffect(() => {
//     // Don't run on initial render
//     if (warnings === 0) {
//       return;
//     }

//     const reason = lastWarningReasonRef.current;
//     if (warnings > MAX_WARNINGS) {
//       if (detectionIntervalRef.current)
//         clearInterval(detectionIntervalRef.current);
//       if (userStream) userStream.getTracks().forEach((track) => track.stop());
//       // The alert must come AFTER navigation to prevent blocking
//       navigate("/disqualified");
//       alert(
//         `Interview Terminated: ${reason}. You have exceeded the maximum number of warnings.`
//       );
//     } else {
//       alert(`Warning ${warnings}/${MAX_WARNINGS}: ${reason}`);
//     }
//   }, [warnings, navigate, userStream]);

//   // handleWarning now ONLY updates state. The useEffect above handles the side-effects.
//   const handleWarning = useCallback((reason) => {
//     if (warningInProgress.current) return;
//     warningInProgress.current = true;

//     lastWarningReasonRef.current = reason; // Store the reason for the current violation
//     setWarnings((prevWarnings) => prevWarnings + 1); // Trigger the useEffect by updating state

//     setTimeout(() => {
//       warningInProgress.current = false;
//     }, 3000); // 3-second cooldown to prevent alert spam
//   }, []);

//   // Effect for detecting tab switching
//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         handleWarning(
//           "Do not switch tabs or minimize the window during the interview."
//         );
//       }
//     };
//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     return () =>
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//   }, [handleWarning]);



//   const handleLeave = async () => {
//     // 2. Validate that the sessionId exists before making an API call.
//     if (!sessionId) {
//       if (detectionIntervalRef.current)
//         clearInterval(detectionIntervalRef.current);
//       alert("Error: No session ID found. Cannot save your results.");
//       navigate("/"); // Redirect to the home page if the session is invalid.
//       return;
//     }

//     // 3. Set the loading state to true to show a visual indicator to the user.
//     setIsAnalyzing(true);

//     // 4. Meticulously format the chat messages into a structured Q&A transcript.
//     const transcript = [];
//     let currentAnswer = "";
//     messages.forEach((msg) => {
//       if (msg.sender === "ai") {
//         if (currentAnswer) {
//           const lastQuestionEntry = transcript[transcript.length - 1];
//           if (lastQuestionEntry) {
//             lastQuestionEntry.answer = currentAnswer.trim();
//           }
//         }
//         currentAnswer = "";
//         transcript.push({ question: msg.text, answer: "" });
//       } else {
//         currentAnswer += msg.text + " ";
//       }
//     });

//     if (currentAnswer && transcript.length > 0) {
//       transcript[transcript.length - 1].answer = currentAnswer.trim();
//     }

//     // 5. Perform the API call within a try...catch...finally block for robust error handling.
//     try {
//       const response = await fetch(`/api/feedback/${sessionId}/analyze`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ transcript }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           result.message || "Failed to get analysis from the server."
//         );
//       }

//       navigate("/result", { state: { feedback: result.feedback } });
//     } catch (error) {
//       console.error("Error analyzing interview:", error);
//       alert(`Sorry, we couldn't analyze your results: ${error.message}`);
//       navigate("/result", { state: { feedback: null } });
//     } finally {
//       setIsAnalyzing(false);
//     }
//   };

//   // Effect to get and manage the user's camera and microphone stream
//   useEffect(() => {
//     // Get the user's media stream once
//     navigator.mediaDevices
//       .getUserMedia({ audio: true, video: true })
//       .then((stream) => {
//         setUserStream(stream); // Store the stream in state
//       })
//       .catch((err) => {
//         console.error("Error accessing media devices.", err);
//         alert("Please allow camera and microphone access to continue.");
//       });
//     // Cleanup stream on component unmount
//     return () => {
//       if (userStream) {
//         userStream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (userStream && userVideoRef.current) {
//       userVideoRef.current.srcObject = userStream;
//     }
//   }, [userStream]);

//   useEffect(() => {
//     if (questions && questions.length > 0 && messages.length === 0) {
//       const firstQuestion = questions[0];
//       setMessages([{ sender: "ai", text: firstQuestion.text }]);
//       speakQuestion(firstQuestion.text);
//     }
//   }, [questions]);

//   const speakQuestion = (text) => {
//     if ("speechSynthesis" in window) {
//       setIsSpeaking(true);
//       const synth = window.speechSynthesis;
//       synth.cancel();
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.onend = () => setIsSpeaking(false);
//       synth.speak(utterance);
//     } else {
//       console.warn(
//         "Web Speech Synthesis API is not supported in this browser."
//       );
//       setIsSpeaking(false);
//     }
//   };

//   // Effect to attach the stream to the video element whenever it's available
//   useEffect(() => {
//     if (userStream && userVideoRef.current) {
//       userVideoRef.current.srcObject = userStream;
//     }
//   }, [userStream]);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const m = String(Math.floor(seconds / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return { m, s };
//   };

//   const { m, s } = formatTime(timeLeft);

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     setMessages((prev) => [...prev, { sender: "me", text: input }]);
//     setInput("");
//     fullTranscriptRef.current = "";

//     if (listening) {
//       isManuallyStopped.current = true;
//       recognitionRef.current.stop();
//       setListening(false);
//     }

//     currentQuestionIndex.current += 1;
//     if (currentQuestionIndex.current < questions.length) {
//       const nextQuestion = questions[currentQuestionIndex.current];
//       setMessages((prev) => [
//         ...prev,
//         { sender: "ai", text: nextQuestion.text },
//       ]);
//       speakQuestion(nextQuestion.text);
//     } else {
//       const closingMessage =
//         "Thank you for your time. The interview is complete.";
//       setMessages((prev) => [...prev, { sender: "ai", text: closingMessage }]);
//       speakQuestion(closingMessage);
//     }
//   };

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Speech recognition not supported in this browser.");
//       return;
//     }

//     if (!recognitionRef.current) {
//       const SpeechRecognition =
//         window.SpeechRecognition || window.webkitSpeechRecognition;
//       recognitionRef.current = new SpeechRecognition();
//       recognitionRef.current.lang = "en-US";
//       recognitionRef.current.continuous = true; // Keep listening until stopped
//       recognitionRef.current.interimResults = true; // Show interim results
//       recognitionRef.current.maxAlternatives = 1;

//       recognitionRef.current.onresult = (event) => {
//         let interimTranscript = "";
//         let finalTranscript = "";
//         for (let i = event.resultIndex; i < event.results.length; ++i) {
//           if (event.results[i].isFinal) {
//             finalTranscript += event.results[i][0].transcript;
//           } else {
//             interimTranscript += event.results[i][0].transcript;
//           }
//         }

//         console.log("🎤 Interim:", interimTranscript);
//         console.log("✅ Final:", finalTranscript);

//         if (finalTranscript.trim().length > 0) {
//           fullTranscriptRef.current += finalTranscript + " ";
//         }

//         setInput(fullTranscriptRef.current + interimTranscript);
//       };

//       // ✨ FIXED: The onend handler is the ONLY place that should restart the recognition.
//       // This correctly handles all cases, including 'no-speech' errors, because 'onend'
//       // is always called after the recognition service stops for any reason.
//       recognitionRef.current.onend = () => {
//         if (listening && !isManuallyStopped.current) {
//           console.log("🔄 Restarting recognition after silence...");
//           recognitionRef.current.start(); // Auto-restart
//         } else {
//           setListening(false);
//         }
//         isManuallyStopped.current = false; // Reset flag for the next session
//       };

//       // ✨ FIXED: The onerror handler should ONLY log the error.
//       // Do not try to restart the recognition here, as it will conflict with onend.
//       recognitionRef.current.onerror = (event) => {
//         console.error("Speech recognition error:", event.error);
//         if (event.error === "no-speech") {
//           console.warn(
//             "No speech detected. Please try speaking louder or closer to the mic."
//           );
//         }
//       };
//     }

//     if (!listening) {
//       setListening(true);
//       isManuallyStopped.current = false;
//       fullTranscriptRef.current = "";
//       recognitionRef.current.start();
//     } else {
//       isManuallyStopped.current = true;
//       setListening(false);
//       recognitionRef.current.stop();
//     }
//   };

//   // if (!proctoringModelIsLoaded) {
//   //   return (
//   //       <div className="fixed inset-0 bg-gray-100 flex flex-col items-center justify-center z-50">
//   //           <LoaderCircle size={48} className="animate-spin text-blue-600" />
//   //           <p className="text-gray-700 text-lg mt-4">Loading proctoring models, please wait...</p>
//   //           <p className="text-gray-500 text-sm mt-2">This may take a moment.</p>
//   //       </div>
//   //   );
//   // }

//   return (
//     <div className="h-[100vh]  bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] p-4 flex flex-col md:flex-row gap-4  ">
//       {/* Loading Overlay when analyzing */}
//       {isAnalyzing && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50 ">
//           <LoaderCircle size={48} className="animate-spin text-white" />
//           <p className="text-white text-lg mt-4">
//             Analyzing your performance, please wait...
//           </p>
//         </div>
//       )}

//       <div className="flex-1 bg-[#111827]  flex flex-col shadow-lg shadow-blue-700/70 backdrop-blur-md rounded-xl">
//         <div className="flex-1 p-4 overflow-y-auto space-y-4">
//           {messages.map((msg, index) => (
//             // <div
//             //   key={index}
//             //   className={`max-w-xs p-3 rounded-lg ${
//             //     msg.sender === "me"
//             //       ? "ml-auto bg-blue-500 text-white border-2 border-gray-400 shadow-2xl"
//             //       : "bg-gray-200 text-gray-900"
//             //   }`}
//             // >
//             //   <p className="text-xs font-semibold mb-1">
//             //     {msg.sender === "me" ? "You" : "AI Agent"}
//             //   </p>
//             //   {msg.text.split("\n").map((line, i) => (
//             //     <p key={i}>{line}</p>
//             //   ))}
//             // </div>
//             <div
//               key={index}
//               className={`max-w-xs p-3 rounded-lg break-words ${
//                 msg.sender === "me"
//                   ? "ml-auto bg-blue-500 text-white  shadow-lg shadow-blue-700/70 backdrop-blur-md"
//                   : "bg-gray-200 text-gray-900 shadow-md shadow-white backdrop-blur-sm"
//               }`}
//             >
//               <p className="text-xs font-semibold mt-5">
//                 {msg.sender === "me" ? "User" : "AI Agent"}
//               </p>
//               {msg.text.split("\n").map((line, i) => (
//                 <p key={i} className="break-words">
//                   {line}
//                 </p>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div className="p-3 border-t flex gap-2 items-center">
//           <input
//             type="text"
//             placeholder="Write your message or use mic..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="flex-1 text-white border border-amber-50 rounded-lg p-2 focus:outline-none"
//             disabled={isSpeaking}
//           />
//           <button
//             onClick={startListening}
//             className={`px-3 py-2 rounded-full transition-colors ${
//               listening ? "bg-red-500 text-white" : "bg-gray-300"
//             }`}
//             title="Click to speak"
//             disabled={isSpeaking}
//           >
//             {listening ? <Mic size={24} /> : <MicOff size={24} />}
//           </button>
//           <button
//             onClick={sendMessage}
//             className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
//             disabled={isSpeaking || !input.trim()}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//       <div className="w-full md:w-1/4 bg-gray-300 rounded-xl shadow-lg p-4 flex flex-col items-center gap-4">
//         <div className="w-full flex justify-between items-center">
//           <div className="text-lg font-bold text-gray-900">
//   Time Left:{" "}
//   <span className="ml-2 text-blue-600">
//     <span className="text-red-600"> {m}</span> :{s}
//   </span>

//   {isSpeaking && (
//     <div className="mt-2 flex items-center space-x-2 text-blue-600 bg-gray-300 p-2 rounded-md shadow-md w-fit">
//       <Volume2 size={20} className="animate-pulse" />
//       <span>AI is speaking..</span>
//     </div>
//   )}
// </div>

//           <div
//             className="flex items-center gap-2 text-yellow-600"
//             title={`${warnings} out of ${MAX_WARNINGS} warnings used`}
//           >
//             <ShieldAlert size={20} />
//             <span className="font-semibold">
//               {warnings}/{MAX_WARNINGS}
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-col gap-6 w-full items-center mt-20">
//           <video
//             ref={userVideoRef}
//             autoPlay
//             playsInline
//             muted
//             className="w-76 h-54 object-cover rounded-lg border"
//           />
//           <video
//             src={Interviewpanel}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-76 h-54 object-cover rounded-lg border"
//           />
//         </div>
//         <button
//           onClick={handleLeave}
//           className="flex items-center bg-[#bd0e0e] hover:bg-[#b84343] text-white px-3 py-1 rounded-md"
//           disabled={isAnalyzing} // Disable button while loading
//         >
//           {/* <PhoneOff size={15} className="mr-1" /> */}
//           {isAnalyzing ? "Analyzing..." : "Submit & Leave"}
//         </button>
//       </div>
//     </div>
//   );
// }





import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Mic,
  MicOff,
  Volume2,
  LoaderCircle,
  ShieldAlert,
} from "lucide-react";
import Interviewpanel from "../assets/Interviewpanel.mp4";

export default function InterviewPanel() {
  const navigate = useNavigate();
  const location = useLocation();

  const { questions, duration, sessionId } = location.state || {
    questions: [],
    duration: 30,
    sessionId: null,
  };

  // ---------------- FULLSCREEN + BACK BLOCK ----------------
  useEffect(() => {
    // Enter Fullscreen
    const enterFullscreen = () => {
      const elem = document.documentElement;
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
      else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
      else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    };
    enterFullscreen();

    // Prevent back navigation
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, null, window.location.href);
      alert("⚠️ You can leave only by clicking Submit & Leave button.");
    };

    // Prevent Esc from exiting fullscreen
    const preventEscExit = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        alert("⚠️ Exit is only allowed using Submit & Leave button.");
      }
    };
    document.addEventListener("keydown", preventEscExit);

    return () => {
      window.onpopstate = null;
      document.removeEventListener("keydown", preventEscExit);
    };
  }, []);
  // ----------------------------------------------------------

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(
    duration ? Number(duration) * 60 : 60 * 5
  );
  const [listening, setListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Proctoring State
  const [warnings, setWarnings] = useState(0);
  const [userStream, setUserStream] = useState(null);
  const MAX_WARNINGS = 3;

  const recognitionRef = useRef(null);
  const userVideoRef = useRef(null);
  const currentQuestionIndex = useRef(0);
  const fullTranscriptRef = useRef("");
  const isManuallyStopped = useRef(false);

  // Proctoring Ref
  const detectionIntervalRef = useRef(null);
  const warningInProgress = useRef(false);
  const lastWarningReasonRef = useRef("");

  // --- PROCTORING LOGIC ---
  useEffect(() => {
    if (warnings === 0) return;

    const reason = lastWarningReasonRef.current;
    if (warnings > MAX_WARNINGS) {
      if (detectionIntervalRef.current)
        clearInterval(detectionIntervalRef.current);
      if (userStream) userStream.getTracks().forEach((track) => track.stop());
      navigate("/disqualified");
      alert(
        `Interview Terminated: ${reason}. You have exceeded the maximum number of warnings.`
      );
    } else {
      alert(`Warning ${warnings}/${MAX_WARNINGS}: ${reason}`);
    }
  }, [warnings, navigate, userStream]);

  const handleWarning = useCallback((reason) => {
    if (warningInProgress.current) return;
    warningInProgress.current = true;
    lastWarningReasonRef.current = reason;
    setWarnings((prevWarnings) => prevWarnings + 1);
    setTimeout(() => {
      warningInProgress.current = false;
    }, 3000);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleWarning(
          "Do not switch tabs or minimize the window during the interview."
        );
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [handleWarning]);

  // ✅ Handle Leave
  const handleLeave = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }

    if (!sessionId) {
      if (detectionIntervalRef.current)
        clearInterval(detectionIntervalRef.current);
      alert("Error: No session ID found. Cannot save your results.");
      navigate("/");
      return;
    }

    setIsAnalyzing(true);

    // Format transcript
    const transcript = [];
    let currentAnswer = "";
    messages.forEach((msg) => {
      if (msg.sender === "ai") {
        if (currentAnswer) {
          const lastQ = transcript[transcript.length - 1];
          if (lastQ) lastQ.answer = currentAnswer.trim();
        }
        currentAnswer = "";
        transcript.push({ question: msg.text, answer: "" });
      } else {
        currentAnswer += msg.text + " ";
      }
    });
    if (currentAnswer && transcript.length > 0) {
      transcript[transcript.length - 1].answer = currentAnswer.trim();
    }

    try {
      const response = await fetch(`/api/feedback/${sessionId}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(
          result.message || "Failed to get analysis from the server."
        );
      }

      navigate("/result", { state: { feedback: result.feedback } });
    } catch (error) {
      console.error("Error analyzing interview:", error);
      alert(`Sorry, we couldn't analyze your results: ${error.message}`);
      navigate("/result", { state: { feedback: null } });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // --- VIDEO/STREAM ---
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => setUserStream(stream))
      .catch((err) => {
        console.error("Error accessing media devices.", err);
        alert("Please allow camera and microphone access to continue.");
      });
    return () => {
      if (userStream) userStream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    if (userStream && userVideoRef.current) {
      userVideoRef.current.srcObject = userStream;
    }
  }, [userStream]);

  useEffect(() => {
    if (questions && questions.length > 0 && messages.length === 0) {
      const firstQuestion = questions[0];
      setMessages([{ sender: "ai", text: firstQuestion.text }]);
      speakQuestion(firstQuestion.text);
    }
  }, [questions]);

  const speakQuestion = (text) => {
    if ("speechSynthesis" in window) {
      setIsSpeaking(true);
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      synth.speak(utterance);
    } else {
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return { m, s };
  };
  const { m, s } = formatTime(timeLeft);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "me", text: input }]);
    setInput("");
    fullTranscriptRef.current = "";

    if (listening) {
      isManuallyStopped.current = true;
      recognitionRef.current.stop();
      setListening(false);
    }

    currentQuestionIndex.current += 1;
    if (currentQuestionIndex.current < questions.length) {
      const nextQuestion = questions[currentQuestionIndex.current];
      setMessages((prev) => [...prev, { sender: "ai", text: nextQuestion.text }]);
      speakQuestion(nextQuestion.text);
    } else {
      const closingMessage = "Thank you for your time. The interview is complete.";
      setMessages((prev) => [...prev, { sender: "ai", text: closingMessage }]);
      speakQuestion(closingMessage);
    }
  };

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.maxAlternatives = 1;

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript.trim().length > 0) {
          fullTranscriptRef.current += finalTranscript + " ";
        }
        setInput(fullTranscriptRef.current + interimTranscript);
      };

      recognitionRef.current.onend = () => {
        if (listening && !isManuallyStopped.current) {
          recognitionRef.current.start();
        } else {
          setListening(false);
        }
        isManuallyStopped.current = false;
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
    }

    if (!listening) {
      setListening(true);
      isManuallyStopped.current = false;
      fullTranscriptRef.current = "";
      recognitionRef.current.start();
    } else {
      isManuallyStopped.current = true;
      setListening(false);
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="h-[100vh] bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] p-4 flex flex-col md:flex-row gap-4">
      {isAnalyzing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
          <LoaderCircle size={48} className="animate-spin text-white" />
          <p className="text-white text-lg mt-4">
            Analyzing your performance, please wait...
          </p>
        </div>
      )}

      <div className="flex-1 bg-[#111827] flex flex-col shadow-lg shadow-blue-700/70 backdrop-blur-md rounded-xl">
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs p-3 rounded-lg break-words ${
                msg.sender === "me"
                  ? "ml-auto bg-blue-500 text-white shadow-lg shadow-blue-700/70"
                  : "bg-gray-200 text-gray-900 shadow-md"
              }`}
            >
              <p className="text-xs font-semibold mt-5">
                {msg.sender === "me" ? "User" : "AI Agent"}
              </p>
              {msg.text.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="p-3 border-t flex gap-2 items-center">
          <input
            type="text"
            placeholder="Write your message or use mic..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 text-white border border-amber-50 rounded-lg p-2 focus:outline-none"
            disabled={isSpeaking}
          />
          <button
            onClick={startListening}
            className={`px-3 py-2 rounded-full transition-colors ${
              listening ? "bg-red-500 text-white" : "bg-gray-300"
            }`}
            title="Click to speak"
            disabled={isSpeaking}
          >
            {listening ? <Mic size={24} /> : <MicOff size={24} />}
          </button>
          <button
            onClick={sendMessage}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            disabled={isSpeaking || !input.trim()}
          >
            Send
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/4 bg-gray-300 rounded-xl shadow-lg p-4 flex flex-col items-center gap-4">
        <div className="w-full flex justify-between items-center">
          <div className="text-lg font-bold text-gray-900">
            Time Left:{" "}
            <span className="ml-2 text-blue-600">
              <span className="text-red-600">{m}</span>:{s}
            </span>
            {isSpeaking && (
              <div className="mt-2 flex items-center space-x-2 text-blue-600 bg-gray-300 p-2 rounded-md shadow-md w-fit">
                <Volume2 size={20} className="animate-pulse" />
                <span>AI is speaking..</span>
              </div>
            )}
          </div>
          <div
            className="flex items-center gap-2 text-yellow-600"
            title={`${warnings} out of ${MAX_WARNINGS} warnings used`}
          >
            <ShieldAlert size={20} />
            <span className="font-semibold">
              {warnings}/{MAX_WARNINGS}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full items-center mt-20">
          <video
            ref={userVideoRef}
            autoPlay
            playsInline
            muted
            className="w-76 h-54 object-cover rounded-lg border"
          />
          <video
            src={Interviewpanel}
            autoPlay
            muted
            loop
            playsInline
            className="w-76 h-54 object-cover rounded-lg border"
          />
        </div>

        <button
          onClick={handleLeave}
          className="flex items-center bg-[#bd0e0e] hover:bg-[#b84343] text-white px-3 py-1 rounded-md"
          disabled={isAnalyzing}
        >
          {isAnalyzing ? "Analyzing..." : "Submit & Leave"}
        </button>
      </div>
    </div>
  );
}
