import React, { useState } from "react";

const faqs = [
  {
    question: "What is AI Interview Platform?",
    answer:
      "Our AI Interview Platform helps you prepare for technical and behavioral interviews using AI-powered mock interviews, coding challenges, and feedback.",
  },
  {
    question: "How do I schedule a mock interview?",
    answer:
      "You can schedule a mock interview from your dashboard by selecting a date and time convenient for you.",
  },
  {
    question: "Are the coding tests timed?",
    answer:
      "Yes, our coding tests are timed to simulate real interview conditions and improve your time management skills.",
  },
  {
    question: "Can I get feedback on my performance?",
    answer:
      "Absolutely! After each mock interview or test, AI-generated detailed feedback will help you identify strengths and areas for improvement.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
        <span className="text-blue-500">Frequently</span> Asked <span className="text-blue-500">Questions</span>
      </h2>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden shadow-2xs shadow-blue-500 transition"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-gray-900 hover:bg-gray-800 focus:outline-none flex justify-between items-center text-white transition-colors"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-[#111827] text-gray-200 text-sm sm:text-base ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

