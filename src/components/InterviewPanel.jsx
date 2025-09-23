

//  ya sehi sahi code upper ka comment out ha

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhoneOff } from "lucide-react";
import interviewPanel from "../assets/interviewPanel.mp4"; 

export default function InterviewPanel() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60 * 5);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const userVideoRef = useRef(null);
  
  // Create a ref for the chat message container
  const messagesContainerRef = useRef(null);

  // Auto-scroll to the bottom whenever a new message is added
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Fetch first question from backend on mount
  useEffect(() => {
    fetch("/api/getFirstQuestion") // Replace with your backend API
      .then((res) => res.json())
      .then((data) => {
        setMessages([{ sender: "ai", text: data.question }]);
      })
      .catch((err) => console.error(err));
  }, []);

  // Camera access
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (userVideoRef.current) userVideoRef.current.srcObject = stream;
      })
      .catch(() => alert("Please allow camera access."));
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user's message
    setMessages((prev) => [...prev, { sender: "me", text: input }]);

    // Send to backend and get next AI question
    fetch("/api/sendAnswer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: input }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: data.nextQuestion },
        ]);
      })
      .catch((err) => console.error(err));

    setInput("");
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
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        setInput(transcript);
      };

      recognitionRef.current.onend = () => {
        setListening(false);
      };
    }

    if (!listening) {
      setListening(true);
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const handleLeave = () => {
    const score = Math.floor(Math.random() * 100); // Placeholder
    navigate("/interim-results", { state: { score } });
  };

  return (
    <div className="h-[100vh] bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] p-3 flex flex-col md:flex-row gap-4">
      {/* Chat Section */}
      <div className="flex-4  bg-[#101536] rounded-xl shadow-lg flex flex-col">
        {/* Attach the ref to this div */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 p-4 overflow-y-auto space-y-4"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs p-3 rounded-lg ${msg.sender === "me"
                ? "ml-auto bg-[#0A84FF] text-white   shadow-2xl"
                : "bg-gray-200 text-white"
                }`}
            >
              <p className="text-xs font-semibold mb-1">
                {msg.sender === "me" ? "You" : "AI Agent"}
              </p>
              {msg.text.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t flex gap-2 items-center">
          <input
            type="text"
            placeholder="Write your message or use mic..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 text-white border  rounded-lg p-2 focus:outline-none"
          />
          <button
            onClick={startListening}
            className={`px-3 py-2 rounded-full ${listening ? "bg-red-500 text-white" : "bg-white"
              }`}
            title="Click to speak"
          >
            🎤
          </button>
          <button
            onClick={sendMessage}
            className="bg-green-500 text-white px-5  rounded-lg hover:bg-green-600"
          >
            Send
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/4 bg-gray-200 rounded-xl shadow-lg p-4 flex flex-col items-center gap-4">
        <div className="text-lg font-bold text-white  border-2 p-2 rounded-md bg-blue-950">
          Time Left : {" "}
          <span className="ml-2 text-red-700">
            {h}:{m}:{s}
          </span>
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
            src={interviewPanel} // Replace with actual interviewer video source
            autoPlay
            muted
            loop
            playsInline
            className="w-76 h-54  object-cover rounded-lg border"
          />
        </div>

        <button
          onClick={handleLeave}
          className="flex items-center bg-[#c31b1b] hover:bg-[#b31616] text-white px-6 py-2 rounded-md  ">
         
           Submit & Leave 
        </button>
      </div>
    </div>
  );
}