// InterviewSession.jsx
import React, { useState, useRef, useEffect } from "react";

export default function InterviewSession({ sessionId, questions, token }) {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [chunks, setChunks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function openCamera() {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(s);
        if (videoRef.current) videoRef.current.srcObject = s;
      } catch (err) {
        console.error("Camera/mic error:", err);
      }
    }
    openCamera();
    return () => {
      if (stream) stream.getTracks().forEach(t => t.stop());
    };
  }, []);

  function speakText(text) {
    if (!("speechSynthesis" in window)) return;
    const ut = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(ut);
  }

  function startRecording() {
    setChunks([]);
    const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    mediaRecorderRef.current = recorder;
    recorder.ondataavailable = (e) => setChunks(prev => [...prev, e.data]);
    recorder.start();
  }

  async function stopAndUpload(questionId) {
    return new Promise(resolve => {
      const recorder = mediaRecorderRef.current;
      if (!recorder) return resolve(null);
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const fd = new FormData();
        fd.append("audio", blob, "answer.webm");
        fd.append("questionId", questionId);
        setLoading(true);
        const res = await fetch(`/api/interview/${sessionId}/uploadAudio`, {
          method: "POST",
          body: fd,
          credentials: "include" // if using cookie auth
        });
        const data = await res.json();
        setLoading(false);
        resolve(data);
      };
      recorder.stop();
    });
  }

  async function handleAsk() {
    if (currentIndex >= questions.length) return;
    const q = questions[currentIndex];
    speakText(q.text);
    // give TTS a second to start, then record
    setTimeout(() => startRecording(), 500);

    // either stop automatically after expectedSeconds, or provide a stop button
    const wait = (q.expectedSeconds || 45) * 1000;
    setTimeout(async () => {
      const data = await stopAndUpload(q.id);
      if (data?.success) {
        setFeedbacks(prev => [...prev, { qId: q.id, analysis: data.analysis, transcript: data.transcript }]);
        setCurrentIndex(ci => ci + 1);
      } else {
        console.error("Upload/transcribe failed", data);
      }
    }, wait);
  }

  if (!questions) return <div>Loading questions...</div>;

  return (
    <div>
      <video ref={videoRef} autoPlay muted playsInline style={{ width: 320, height: 240, background:"#000" }} />
      <div>
        <h3>Question {currentIndex+1}/{questions.length}</h3>
        {currentIndex < questions.length ? (
          <>
            <p>{questions[currentIndex].text}</p>
            <button onClick={handleAsk} disabled={loading}>Start & Auto Stop</button>
            <p>{loading ? "Processing..." : ""}</p>
          </>
        ) : (
          <p>Interview complete — finishing up...</p>
        )}
      </div>

      <div>
        <h4>Feedback so far</h4>
        {feedbacks.map((f,i) => (
          <div key={i}>
            <b>Q {f.qId}</b>
            <p>Score: {f.analysis?.score}</p>
            <p>Advice: {f.analysis?.advice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
