
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { Menu, X } from "lucide-react";
// import "./Navbar.css";

// export default function Navbar() {
//   const borderRef = useRef(null);
//   const mobileMenuRef = useRef(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     gsap.to(borderRef.current, {
//       backgroundPosition: "200% center",
//       duration: 4,
//       ease: "none",
//       repeat: -1,
//     });

//     // Initially hide menu off-screen
//     gsap.set(mobileMenuRef.current, { x: "100%" });
//   }, []);

//   useEffect(() => {
//     if (menuOpen) {
//       gsap.to(mobileMenuRef.current, { x: "0%", duration: 0.5, ease: "power3.out" });
//     } else {
//       gsap.to(mobileMenuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
//     }
//   }, [menuOpen]);

//   return (
//     <nav className="relative max-w-[90%] sm:max-w-[900px] mx-auto rounded-lg p-[2px]">
//       {/* Animated Border */}
//       <div
//         ref={borderRef}
//         className="animated-border absolute inset-0 rounded-lg"
//       ></div>

//       {/* Inner Navbar */}
//       <div className="relative bg-black text-white rounded-lg flex items-center justify-between px-4 py-3">
//         {/* Logo */}
//         <h1 className="font-bold text-lg">InterviewReady-AI</h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 text-sm lg:text-base">
//           <li className="cursor-pointer">Home</li>
//           <li className="cursor-pointer">ATS Score</li>
//           <li className="cursor-pointer">Practice Interviews</li>
//           <li className="cursor-pointer">Support</li>
//         </ul>

//         {/* Get Started Button */}
//         <button className="hidden md:block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
//           Get Started
//         </button>

//         {/* Mobile Menu Button (This already toggles between Menu and X) */}
//         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu (sliding panel) */}
//       <div
//         ref={mobileMenuRef}
//         className="fixed top-0 right-0 w-2/3 h-full bg-black text-white flex flex-col gap-6 p-6 md:hidden z-50"
//       >
//         {/* Close Button inside the mobile menu */}
//         <div className="flex justify-end">
//           <button onClick={() => setMenuOpen(false)}>
//             <X size={24} />
//           </button>
//         </div>
        
//         {/* Menu items */}
//         <h4 className="cursor-pointer">Home</h4>
//         <h4 className="cursor-pointer">ATS Score</h4>
//         <h4 className="cursor-pointer">Practice Interviews</h4>
//         <h4 className="cursor-pointer">Support</h4>
//         <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
//           Get Started
//         </button>
//       </div>
//     </nav>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import router tools
import "./Navbar.css";

export default function Navbar() {
  const borderRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.to(borderRef.current, {
      backgroundPosition: "200% center",
      duration: 4,
      ease: "none",
      repeat: -1,
    });

    gsap.set(mobileMenuRef.current, { x: "100%" });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, { x: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(mobileMenuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [menuOpen]);

  return (
    <nav className="relative max-w-[90%] sm:max-w-[900px] mx-auto rounded-lg p-[2px]">
      {/* Animated Border */}
      <div
        ref={borderRef}
        className="animated-border absolute inset-0 rounded-lg"
      ></div>

      {/* Inner Navbar */}
      <div className="relative bg-black text-white rounded-lg flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="font-bold text-lg cursor-pointer"
        >
          Interview Edge
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm lg:text-base">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/ats">ATS Score</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/practice">Practice Interviews</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/support">About Us</Link>
          </li>
        </ul>

        {/* Get Started Button */}
        <button
          onClick={() => navigate("/signup")}
          className="hidden md:block bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-2/3 h-full bg-black text-white flex flex-col gap-6 p-6 md:hidden z-50"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Menu items */}
        <h4 onClick={() => navigate("/")} className="cursor-pointer">Home</h4>
        <h4 onClick={() => navigate("/ats")} className="cursor-pointer">ATS Score</h4>
        <h4 onClick={() => navigate("/practice")} className="cursor-pointer">Practice Interviews</h4>
        <h4 onClick={() => navigate("/support")} className="cursor-pointer">About Us</h4>

        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}



