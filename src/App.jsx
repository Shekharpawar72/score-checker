// import { useState } from 'react'
// import './App.css'
// import ResumeScoreChecker from './components/ResumeScoreChecker'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AIInterviewForm from './components/AIInterviewForm';
// import AIInterviewRules from './components/AIInterviewRules';
// import InterviewPanel from './components/InterviewPanel';
// import interimResults from './components/InterviewResult';

// import { Routes, Route } from "react-router-dom";
// import { Home } from 'lucide-react';

// import Homes from './pages/Homes';
// import { gsap } from "gsap";
// import React, { useEffect, useRef } from "react";
// import { Outlet } from "react-router-dom";






// function App() {




//   return (
//     <div className="h-screen  bg-black">

//       {/* <Homes /> */}
//        <Routes>
//       <Route path="/" element={<Homes />} />
//       <Route path="/ai-interview-form" element={<AIInterviewForm />} />
//     </Routes>
       
//     </div>
//   )
// }

// export default App

// import { useState, useEffect, useRef } from "react";
// import "./App.css";
// import ResumeScoreChecker from "./components/ResumeScoreChecker";
// import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
// import AIInterviewForm from "./components/AIInterviewForm";
// import AIInterviewRules from "./components/AIInterviewRules";
// import InterviewPanel from "./components/InterviewPanel";
// import interimResults from "./components/InterviewResult";
// import { Home } from "lucide-react";
// import Homes from "./pages/Homes";
// import { gsap } from "gsap";
// import React from "react";

// function App() {
//   return (
//     <div className="h-screen bg-black">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Homes />} />
//           <Route path="/ai-interview-form" element={<AIInterviewForm />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/Router";

function App() {
  return (
    <div className="h-screen bg-black">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
