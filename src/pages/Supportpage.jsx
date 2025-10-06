// import React, { useState } from "react";
// import { Search, Settings, User, HelpCircle, BookOpen, Cpu } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const SupportPage = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const categories = [
//     {
//       id: "getting-started",
//       title: "Getting Started",
//       description: "Start your journey with our AI interview platform.",
//       icon: <HelpCircle size={36} className="text-purple-400" />,
//     },
//     {
//       id: "account-settings",
//       title: "Account Settings",
//       description: "Manage your profile, password, and preferences.",
//       icon: <User size={36} className="text-blue-400" />,
//     },
//     {
//       id: "platform-guide",
//       title: "Platform Guide",
//       description: "Learn how to navigate and use all key features.",
//       icon: <BookOpen size={36} className="text-green-400" />,
//     },
//     {
//       id: "ai-feedback",
//       title: "AI Feedback",
//       description: "Understand AI evaluation and scoring system.",
//       icon: <Cpu size={36} className="text-yellow-400" />,
//     },
//     {
//       id: "technical-support",
//       title: "Technical Support",
//       description: "Resolve technical or system-related issues.",
//       icon: <Settings size={36} className="text-red-400" />,
//     },
//     {
//       id: "faqs",
//       title: "FAQs",
//       description: "Find answers to the most common questions.",
//       icon: <HelpCircle size={36} className="text-pink-400" />,
//     },
//   ];

//   // 🔍 Filter categories based on search
//   const filteredCategories = categories.filter((cat) =>
//     cat.title.toLowerCase().includes(query.toLowerCase()) ||
//     cat.description.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-[#0b0f14] text-gray-200">
//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 py-16 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-white">Help Center</h1>
//         <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
//           Need help? We’ve got your back.  
//           From setup to interview tips, find everything here.
//         </p>

//         {/* Search Bar */}
//         <div className="max-w-2xl mx-auto mt-8 relative">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search for help..."
//             className="w-full p-4 pl-12 rounded-lg bg-[#1a1f29] border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg"
//           />
//           <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//       </header>

//       {/* Categories */}
//       <main className="max-w-6xl mx-auto px-6 py-12">
//         <h2 className="text-2xl font-semibold text-white text-center mb-10">
//           Browse Support Topics
//         </h2>

//         {filteredCategories.length > 0 ? (
//           <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//             {filteredCategories.map((cat) => (
//               <div
//                 key={cat.id}
//                 className="bg-[#1a1f29] border border-gray-700 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/90 hover:scale-105 transition"
//               >
//                 <div className="flex justify-center mb-4">{cat.icon}</div>
//                 <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
//                 <p className="text-sm text-gray-400 mt-3 leading-relaxed">
//                   {cat.description}
//                 </p>
// <Link
//   to="/support/form"   // 👈 always goes to the same form
//   className="mt-5 text-white hover:text-blue-500 text-sm font-medium inline-block"
// >
//   Learn More →
// </Link>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-400 text-lg mt-12">
//             No results found for "<span className="text-purple-400">{query}</span>"
//           </p>
//         )}
//       </main>
//     </div>
//   );
// };

// export default SupportPage;














import React from "react";
import aiBanner from "../assets/step1.jpg"; 
import aiHiring from "../assets/step2.jpg"; 
import aiPrep from "../assets/step3.jpg";  

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Our AI Interview Platform
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Preparing candidates for the future of hiring with Artificial Intelligence.
        </p>
      </section>

      {/* Section 1: AI Trend */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-800">
            Why AI Interviews are the New Trend?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            In today’s competitive job market, companies receive thousands of applications. 
            To save time, reduce bias, and maintain efficiency, <b>AI-powered interviews</b> 
            are rapidly being adopted worldwide.
            <br /><br />
            Big tech firms and startups rely on AI to evaluate communication, technical knowledge, 
            and confidence in a scalable way.
            <br /><br />
            AI-driven interviews are not just a trend – they are becoming a 
            <b> standard in recruitment</b>, ensuring fair evaluation and faster hiring decisions.
          </p>
        </div>
        <div>
          <img
            src={aiBanner}
            alt="AI Interview Trend"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Section 2: Recruiter Benefits */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={aiHiring}
            alt="AI Recruitment Benefits"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-pink-600">
            Smarter Hiring for Recruiters
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Recruiters save countless hours by letting AI handle the initial screening process. 
            Instead of spending days on repetitive interviews, hiring managers can focus on top-performing candidates.
            <br /><br />
            Structured AI insights help reduce bias, improve candidate experience, and enable faster, data-driven decisions.
          </p>
        </div>
      </section>

      {/* Section 3: Candidate Preparation */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-800">
            Better Preparation for Candidates
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our platform allows candidates to practice realistic AI interviews before facing real recruiters.
            <br /><br />
            Receive instant, unbiased feedback on communication skills, confidence, and technical knowledge.
            <br /><br />
            Students and professionals can be <b>interview-ready anytime, anywhere</b>.
          </p>
        </div>
        <div>
          <img
            src={aiPrep}
            alt="AI Candidate Preparation"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "AI-Powered Experience",
              desc: "Practice with the same AI-driven methods used by global companies in real hiring.",
              icon: "🤖",
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Fair & Scalable",
              desc: "Get unbiased feedback on your answers, tone, and clarity with scalable technology.",
              icon: "⚡",
              color: "from-pink-500 to-purple-500",
            },
            {
              title: "Future-Ready Preparation",
              desc: "Stay ahead with advanced interview simulations aligned to market needs.",
              icon: "🚀",
              color: "from-purple-600 to-pink-400",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl shadow-lg text-white hover:scale-105 transition-transform duration-500 text-center`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
