

//  ya sehi sahi code upper ka comment out ha

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhoneOff } from "lucide-react";

export default function InterviewPanel() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [timeLeft, setTimeLeft] = useState(60 * 5);
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef(null);
    const userVideoRef = useRef(null);

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
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row gap-4">
            {/* Chat Section */}
            <div className="flex-4 bg-white rounded-xl shadow-lg flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`max-w-xs p-3 rounded-lg ${msg.sender === "me"
                                ? "ml-auto bg-blue-300 text-white border-2 border-gray-400 shadow-2xl"
                                : "bg-gray-200 text-gray-900"
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
                        className="flex-1 text-gray-600 border rounded-lg p-2 focus:outline-none"
                    />
                    <button
                        onClick={startListening}
                        className={`px-3 py-2 rounded-full ${listening ? "bg-red-500 text-white" : "bg-gray-300"
                            }`}
                        title="Click to speak"
                    >
                        🎤
                    </button>
                    <button
                        onClick={sendMessage}
                        className="bg-green-500 text-white px-4 rounded-lg hover:bg-green-600"
                    >
                        Send
                    </button>
                </div>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-1/3 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center gap-4">
                <div className="text-lg font-bold text-gray-900">
                    Time Left:{" "}
                    <span className="ml-2 text-blue-600">
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
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-76 h-54  object-cover rounded-lg border"
                    />
                </div>




                <button
                    onClick={handleLeave}
                    className="flex items-center bg-[#C64C4C] hover:bg-[#b84343] text-white px-3 py-1 rounded-md mt-32">
                    <PhoneOff size={16} className="mr-1" />
                    Leave
                </button>
            </div>
        </div>
    );
}
