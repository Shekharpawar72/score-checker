import React from "react";
import { Users, FileText, Briefcase } from "lucide-react";
import CountUp from "react-countup";

const StatsCard = ({ icon: Icon, label, value, isLast }) => {
  return (
    <div
      className={`mt-20 flex flex-col items-center justify-center 
      bg-[#111827]/80 border border-gray-800 
      shadow-lg hover:shadow-blue-500
      backdrop-blur-md text-white 
      rounded-xl p-6 hover:scale-105 
      transition-all duration-300
      ${isLast ? "col-span-2 sm:col-span-1" : ""}`}
    >
      <Icon size={36} className="mb-3 text-blue-500" />
      <h2 className="text-2xl sm:text-3xl font-extrabold">
        <CountUp end={value} duration={2} separator="," /><span className="text-blue-500">+</span>
      </h2>
      <p className="text-white mt-2 text-sm sm:text-base">{label}</p>
    </div>
  );
};

export default function UserStats() {
  const stats = [
    { icon: Users, label: "Active Users", value: 25 },
    { icon: Briefcase, label: "Mock Interviews", value: 20 },
    { icon: FileText, label: "Resumes Reviewed", value: 85 },
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 px-6 ">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-12 text-center">
        Platform <span className="text-blue-500">Impact's</span>
      </h1>
      <p className="text-white font-semibold text-lg text-center max-w-2xl mb-12 ">
        Helping candidates boost their confidence with <span className="text-blue-500 font-semibold">mock interviews</span>,  
        optimize resumes for <span className="text-blue-500 font-semibold">ATS systems</span>,  
        and build a strong career journey.  
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full max-w-5xl">
        {stats.map((item, index) => (
          <StatsCard
            key={index}
            {...item}
            isLast={index === stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
