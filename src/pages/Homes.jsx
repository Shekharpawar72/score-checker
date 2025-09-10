




import React, { useEffect, useRef } from "react";
import homePageImage from "../assets/homePage.png";
import Navbar from "../components/custom/Navbar";
import Team from "../pages/Team"

import HowItWork from "../components/custom/HowItWork";
import { gsap } from "gsap";

// import ResumeChecker from "../pages/ResumeChecker";
import ResumeChecker from "./Resumechecker";

import TravelingLine from "../components/custom/TravelingLine";
import Faq from "../components/custom/Fqs";
import Footer from "../components/custom/Footer";
import { ImMoveUp } from "react-icons/im";
import UserStats from "../components/custom/Userstats";
import TestModeBanner from "../components/TestModeBanner";

const Homes = () => {
  const appRef = useRef(null);

  useEffect(() => {
    if (appRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        appRef.current,
        { opacity: 0, scale: 0.9, y: 30 }, // start smaller + lower
        {
          opacity: 1,
          duration: 1.5, // fade in first
          ease: "power2.out",
        }
      ).to(appRef.current, {
        scale: 1,
        y: 0,
        duration: 1.2, // then zoom in smoothly
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] text-white overflow-x-hidden">
      {/* Navbar fixed */}
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-[#0b0f14]/80 backdrop-blur-md shadow-md" />
       <TestModeBanner/>
      {/* Hero Section */}
      <div className="pt-24 max-w-full mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-52 items-center overflow-hidden">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block text-[10px] tracking-widest font-semibold uppercase bg-blue-600/90 px-3 py-1 rounded-full shadow-md">
            New
          </span>

          <h1 className="text-4xl sm:text-8xl md:text-8xl font-semibold mt-6 leading-tight">
            Prepare For Your Dream <span className="text-blue-500">Job</span>
          </h1>

          <p className="text-[#D2D8E4] mt-6 text-base sm:text-[20px] max-w-xl">
            An AI-powered platform that simulates real interviews, provides
            instant feedback, and helps you track your progress for success.
          </p>

          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white 
                hover:bg-white hover:text-blue-600
                border border-blue-600 
                transition rounded-3xl font-medium"
          >
            Get Started
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div ref={appRef} className="relative flex items-center justify-center">
          {/* Neon Glow */}
          <div className="pointer-events-none absolute -right-8 top-10 h-2/3 w-28 bg-gradient-to-b from-cyan-400/40 via-blue-500/30 to-indigo-600/20 blur-3xl rounded-full opacity-80 " />

          {/* Panel */}
          <div className="relative w-full max-w-[560px] rounded-[22px] bg-[#0e1420]/70 border-2 border-[#375D93] shadow-2xl shadow-blue-700 backdrop-blur-md overflow-hidden">
            <div className="pointer-events-none absolute -top-2 left-6 right-6 h-[3px] bg-gradient-to-r from-transparent via-sky-600/70 to-transparent blur-[2px]" />

            <div className="p-5">
              <img
                src={homePageImage}
                alt="AI interface"
                className="w-full h-auto max-h-[360px] object-cover md:object-contain rounded-xl"
              />
            </div>

            <div className="relative mx-4 sm:mx-8 mb-4 sm:mb-8">
              <div className="h-16 rounded-3xl bg-black/90 border border-white/5 flex items-center justify-between px-4 sm:px-6">
                <span className="text-sm text-gray-300">Running...</span>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-black hover:bg-gradient-to-r shadow-md transition-transform transform hover:scale-105">
                  <span className="text-blue-600 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent transform hover:scale-125 cursor-pointer">
                    ✦
                  </span>
                  Stop
                </button>
              </div>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-sky-400/40 via-fuchsia-400/30 to-rose-400/40 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWork />

      {/* ATS Resume Section */}
      <div className="mt-16 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
        <h3 className="text-5xl font-extrabold">
          ATS-Ready Resume in <span className="text-blue-500">Minutes</span>
        </h3>
        <p className="mt-3 text-gray-400 text-shadow-2xs">
          Scan your resume and get actionable suggestions to make it recruiter-friendly.
        </p>
      </div>

      {/* Resume Checker Component */}
      <ResumeChecker />
      <div className="my-12">
  <UserStats />
</div>
      <Team />
         <Faq/>

     <div className="mt-20"> <Footer/></div>
      

    
    </div>
  );
};

export default Homes;
