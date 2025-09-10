// src/routes/router.jsx
import { Routes, Route } from "react-router-dom";
import Homes from "../pages/Homes";
import AIInterviewForm from "../components/AIInterviewForm";
import AIInterviewRules from "../components/AIInterviewRules";
import InterviewPanel from "../components/InterviewPanel";
import InterimResults from "../components/InterviewResult";

import AuthContainer from "../pages/AuthContainer";
import ResumeScoreChecker from "../components/ResumeScoreChecker";
import GetSuggestionsCard from "../components/GetSuggestionsCard";
import ResumeOptimazationTip  from"../components/ResumeOptimazationTip";
import TermsAndConditions from "../components/Termsandconditions";
import SupportPage from "../pages/Supportpage";
import SupportDetail from "../pages/SupportDetail";

// import Home from "../pages/Home";

// import ATSScore from "../pages/ATSScore";
// import Practice from "../pages/Practice";
// import Support from "../pages/Support";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/ai-interview-form" element={<AIInterviewForm />} />
      <Route path="/rules" element={<AIInterviewRules />} />
      <Route path="/interview-panel" element={<InterviewPanel />} />
      <Route path="/interim-results" element={<InterimResults />} />
      <Route path="/signup" element={<AuthContainer />} />
        <Route path="/practice" element={<AIInterviewForm />} />

  <Route path="/resume-score-checker" element={<ResumeScoreChecker />} />
   <Route path="/suggestions" element={<GetSuggestionsCard />} />
   <Route path="/resume-optimization-tips" element={<ResumeOptimazationTip />} />
   <Route path="/ats" element={<ResumeScoreChecker />} /> 
   <Route path="/terms" element={<TermsAndConditions />} />
   <Route path="/support" element={<SupportPage />} />
   <Route path="/support/:category" element={<SupportDetail />} />

        {/* <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ats" element={<ATSScore />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/support" element={<Support />} /> */}
    </Routes>
  );
}
