import React, { useState } from "react";
import { Search, Settings, User, HelpCircle, BookOpen, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SupportPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const categories = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Start your journey with our AI interview platform.",
      icon: <HelpCircle size={36} className="text-purple-400" />,
    },
    {
      id: "account-settings",
      title: "Account Settings",
      description: "Manage your profile, password, and preferences.",
      icon: <User size={36} className="text-blue-400" />,
    },
    {
      id: "platform-guide",
      title: "Platform Guide",
      description: "Learn how to navigate and use all key features.",
      icon: <BookOpen size={36} className="text-green-400" />,
    },
    {
      id: "ai-feedback",
      title: "AI Feedback",
      description: "Understand AI evaluation and scoring system.",
      icon: <Cpu size={36} className="text-yellow-400" />,
    },
    {
      id: "technical-support",
      title: "Technical Support",
      description: "Resolve technical or system-related issues.",
      icon: <Settings size={36} className="text-red-400" />,
    },
    {
      id: "faqs",
      title: "FAQs",
      description: "Find answers to the most common questions.",
      icon: <HelpCircle size={36} className="text-pink-400" />,
    },
  ];

  // 🔍 Filter categories based on search
  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(query.toLowerCase()) ||
    cat.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0f14] text-gray-200">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Help Center</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Need help? We’ve got your back.  
          From setup to interview tips, find everything here.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-8 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for help..."
            className="w-full p-4 pl-12 rounded-lg bg-[#1a1f29] border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </header>

      {/* Categories */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-white text-center mb-10">
          Browse Support Topics
        </h2>

        {filteredCategories.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#1a1f29] border border-gray-700 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/90 hover:scale-105 transition"
              >
                <div className="flex justify-center mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  {cat.description}
                </p>
<Link
  to="/support/form"   // 👈 always goes to the same form
  className="mt-5 text-white hover:text-blue-500 text-sm font-medium inline-block"
>
  Learn More →
</Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg mt-12">
            No results found for "<span className="text-purple-400">{query}</span>"
          </p>
        )}
      </main>
    </div>
  );
};

export default SupportPage;
