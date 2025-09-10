


// import React from "react";
// import {
//   Mail,
//   Phone,
//   Linkedin,
//   Twitter,
//   Github,
//   Globe,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-950 text-gray-100 relative overflow-hidden">
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-indigo-900/20 to-transparent pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Brand + mission */}
//           <div className="space-y-6">
//             <a href="#" className="flex items-center gap-3">
//               <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
//                 AI
//               </div>
//               <span className="text-2xl font-bold tracking-tight">AI Solutions</span>
//             </a>
//             <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
//               Empowering businesses with next-gen <span className="text-white font-medium">Artificial Intelligence</span>. We design ethical, scalable, and user-friendly AI applications that drive innovation.
//             </p>
//             <div className="flex items-center gap-3 flex-wrap">
//               <a aria-label="Github" href="#" className="p-2 rounded-md hover:bg-gray-800 transition">
//                 <Github size={18} />
//               </a>
//               <a aria-label="Twitter" href="#" className="p-2 rounded-md hover:bg-gray-800 transition">
//                 <Twitter size={18} />
//               </a>
//               <a aria-label="LinkedIn" href="#" className="p-2 rounded-md hover:bg-gray-800 transition">
//                 <Linkedin size={18} />
//               </a>
//               <a aria-label="Website" href="#" className="p-2 rounded-md hover:bg-gray-800 transition">
//                 <Globe size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Navigation links */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//             <div>
//               <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-white">Solutions</h4>
//               <ul className="space-y-2 text-gray-400 text-sm">
//                 <li><a href="#" className="hover:text-gray-200 transition">AI Chatbots</a></li>
//                 <li><a href="#" className="hover:text-gray-200 transition">Process Automation</a></li>
//                 <li><a href="#" className="hover:text-gray-200 transition">Predictive Analytics</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-white">Company</h4>
//               <ul className="space-y-2 text-gray-400 text-sm">
//                 <li><a href="#" className="hover:text-gray-200 transition">About Us</a></li>
//                 <li><a href="#" className="hover:text-gray-200 transition">Careers</a></li>
//                 <li><a href="#" className="hover:text-gray-200 transition">Research Lab</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-white">Support</h4>
//               <ul className="space-y-3 text-gray-400 text-sm">
//                 <li className="flex items-center gap-2 flex-wrap">
//                   <Phone size={14} />
//                   <a href="tel:+911234567890" className="hover:text-gray-200 transition break-all">+91 12345 67890</a>
//                 </li>
//                 <li className="flex items-center gap-2 flex-wrap">
//                   <Mail size={14} />
//                   <a href="mailto:support@aisolutions.com" className="hover:text-gray-200 transition break-all">support@aisolutions.com</a>
//                 </li>
//                 <li><a href="#" className="hover:text-gray-200 transition">Documentation</a></li>
//               </ul>
//             </div>
//           </div>

//           {/* Newsletter / CTA */}
//           <div className="flex flex-col justify-between bg-gray-900/40 p-6 rounded-xl border border-gray-800 shadow-lg">
//             <div>
//               <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-white">Stay Ahead</h4>
//               <p className="text-gray-400 text-sm mb-5">Get the latest AI insights, product updates, and research breakthroughs — straight to your inbox.</p>

//               <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
//                 <label htmlFor="footer-email" className="sr-only">Email address</label>
//                 <input
//                   id="footer-email"
//                   type="email"
//                   required
//                   placeholder="Enter your email"
//                   className="flex-1 min-w-0 rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                   type="submit"
//                   className="rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>

//             <div className="mt-6 text-gray-500 text-sm">
//               <p>© {new Date().getFullYear()} AI Solutions. All rights reserved.</p>
//               <p className="mt-2">Crafting smarter digital ecosystems powered by AI.</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-12 border-t border-gray-800 pt-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-gray-500 text-sm">
//             <div className="flex gap-4 flex-wrap">
//               <a href="#" className="hover:text-gray-200 transition">Privacy Policy</a>
//               <a href="#" className="hover:text-gray-200 transition">Terms of Service</a>
//               <a href="#" className="hover:text-gray-200 transition">Security</a>
//             </div>
//             <div className="text-xs">Designed with React & Tailwind • Optimized for AI applications</div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import React from "react";
import {
  Mail,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-100 text-sm shadow-2xl shadow-blue-500 ">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + short mission */}
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-base shadow">
                AI
              </div>
              <span className="text-lg font-extrabold">InterviewReady-AI</span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Your trusted platform for AI-powered interview prep, ATS Score Checker, and career growth.
            </p>
            <div className="flex items-center gap-2">
              <a aria-label="Github" href="#" className="p-1.5 rounded hover:bg-gray-800">
                <Github size={16} />
              </a>
              <a aria-label="Twitter" href="#" className="p-1.5 rounded hover:bg-gray-800">
                <Twitter size={16} />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-1.5 rounded hover:bg-gray-800">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Platform</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-gray-200">Mock Interviews</a></li>
                <li><a href="#" className="hover:text-gray-200">ATS Score Checker </a></li>
                <li><a href="#" className="hover:text-gray-200">AI Feedback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Resources</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-gray-200">Blog</a></li>
                <li><a href="#" className="hover:text-gray-200">Guides</a></li>
                <li><a href="#" className="hover:text-gray-200">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Subscribe + Contact */}
          <div>
            <h4 className="font-medium mb-2">Stay Updated</h4>
            <p className="text-gray-400 mb-3">Subscribe to get the latest interview tips and AI resources.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md px-3 py-2 text-sm bg-gray-900 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-md bg-blue-500 hover:bg-indigo-500 text-white text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Contact</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="mailto:support@aiinterview.com" className="flex items-center gap-2 hover:text-gray-200"><Mail size={14} /> support@InterviewReady.com</a></li>
                <li><a href="#" className="hover:text-gray-200">Help Center | +91 9301163448</a></li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-500 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500">
          <p>© {new Date().getFullYear()} AI Interview. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-200">Privacy</a>
            <a href="#" className="hover:text-gray-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}