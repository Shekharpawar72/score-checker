import { useState } from 'react'
import './App.css'
import ResumeScoreChecker from './components/ResumeScoreChecker'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AIInterviewForm from './components/AIInterviewForm';
import AIInterviewRules from './components/AIInterviewRules';
import InterviewPanel from './components/InterviewPanel';
import interimResults from './components/InterviewResult';
import { Home } from 'lucide-react';

import Homes from './pages/Homes';
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";






function App() {




  return (
    <div className="h-screen  bg-black">

      <Homes />
    </div>
  )
}

export default App
