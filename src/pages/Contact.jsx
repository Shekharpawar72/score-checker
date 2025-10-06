import React, { useState } from "react";

const FeedbackForm = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSuccess(true); 
    e.target.reset();

    
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] p-6">
      <div className="max-w-6xl w-full space-y-12">
        {/* Top Heading Section */}
        <div className="relative w-full flex flex-col justify-center items-center my-10">
          <h1 className="absolute text-7xl md:text-[200px] font-extrabold text-gray-500 opacity-20 tracking-wider select-none">
            CONTACT
          </h1>
          <div className="relative flex items-center justify-center gap-6 mt-6">
            <div className="w-24 md:w-52 h-[2px] bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-500 whitespace-nowrap">
              GET IN TOUCH
            </h2>
            <div className="w-24 md:w-52 h-[2px] bg-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-30">
          <div className="text-white">
            <h3 className="text-3xl font-extrabold text-gradient bg-clip-text tracking-wide uppercase text-white">
              Don’t Be <span className="text-blue-500">Shy 👋</span>
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mt-6">
              I’m always happy to connect! Whether it’s a new project,
              collaboration, or just to say hello, feel free to reach out. Let’s
              create something amazing together.
            </p>
            <div className="space-y-6 mt-10">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition">
                  <span className="text-blue-400 text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">Mail Me</h4>
                  <p className="text-gray-300 group-hover:text-blue-400 transition">
                    InterviewEdge@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition">
                  <span className="text-green-400 text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">Call Me</h4>
                  <p className="text-gray-300 group-hover:text-green-400 transition">
                    +91 9301163XX
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#151a23]/90 p-6 rounded-xl shadow-lg shadow-blue-700 backdrop-blur-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Name"
                className="p-3 w-full rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Enter a valid Email Address"
                className="p-3 w-full rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <select
                className="p-3 w-full rounded-md bg-[#151a23] text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select Purpose
                </option>
                <option value="Project Inquiry">Project Inquiry</option>
                <option value="Collaboration / Partnership">
                  Collaboration / Partnership
                </option>
                <option value="Business Proposal">Business Proposal</option>
                <option value="Hiring / Freelance Opportunity">
                  Hiring / Freelance Opportunity
                </option>
                <option value="Feedback / Suggestions">
                  Feedback / Suggestions
                </option>
                <option value="Other">Other</option>
              </select>
              <textarea
                placeholder="Enter your Message"
                rows="4"
                className="p-3 w-full rounded-md bg-transparent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all flex justify-center"
              >
                SUBMIT
              </button>

              {/* Success Message */}
              {success && (
                <p className="text-green-400 font-semibold mt-3 text-center transition-opacity duration-500">
                  Your message has been submitted successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
