import React from "react";
import { Briefcase, MessageSquareText, Zap, TrendingUp } from "lucide-react";
import chooseRole from "../../assets/step4.jpg";
import interviewQuestion from "../../assets/step1.jpg";
import feedbackpng from "../../assets/step2.jpg";
import improve from "../../assets/step3.jpg";

import { useNavigate } from "react-router-dom";


const steps = [
  {
    icon: (
      <Briefcase className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_8px_rgba(255,225,0,0.4)]" />
    ),
    title: "Choose Your Role",
    description:
      "Select the job role you are preparing for — Software Engineer, Data Analyst, Product Manager, and more.",
    image: chooseRole,
  },
  {
    icon: (
      <MessageSquareText className="w-12 h-12 text-pink-400 drop-shadow-[0_0_8px_rgba(225,0,255,0.4)]" />
    ),
    title: "Practice Interview Questions",
    description:
      "Our AI simulates real interview questions tailored to your chosen role with contextual follow-ups.",
    image: interviewQuestion,
  },
  {
    icon: (
      <Zap className="w-12 h-12 text-green-400 drop-shadow-[0_0_8px_rgba(0,255,100,0.4)]" />
    ),
    title: "Get Real-Time Feedback",
    description:
      "Receive instant feedback on communication, clarity, and confidence while answering questions.",
    image: feedbackpng,
  },
];

const HowItWork = () => {
    const navigate = useNavigate();

  const handleStart = () => {
    navigate("/ai-interview-form"); // ✅ ye page pe redirect karega
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] text-white">
      <div className="max-w-4xl mx-auto px-2 text-center mt-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          How <span className="text-blue-500">It Works</span>
        </h2>
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-16 font-medium">
          Get ready for your next interview with our AI-powered platform. Follow
          these simple steps to practice, learn, and improve.
        </p>

        {/* Steps timeline */}
        <div className="flex flex-col gap-16 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative bg-[#151a23]/90 border border-blue-900 rounded-2xl px-8 pt-18 pb-10 shadow-xl shadow-blue-700/20 flex flex-col items-center text-center md:min-w-[320px] min-w-0 hover:scale-105 hover:shadow-blue-700 transition-all duration-300 overflow-visible">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#141822] rounded-full shadow-lg">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base">{step.description}</p>
              </div>

              {/* Step Image */}
              <img
                src={step.image}
                alt={`${step.title} illustration`}
                className="w-72 h-72 object-contain rounded-2xl shadow-lg border border-blue-800 bg-gradient-to-br from-[#141A24] via-[#0b0f14] to-[#141A24] p-2"
              />
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-20">
          <button
              onClick={handleStart}
            className="mt-6 px-6 py-3 bg-blue-600 text-white 
                hover:bg-white hover:text-blue-600
                border border-blue-600 
                transition rounded-3xl font-medium"
          >
            Start Interview
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
