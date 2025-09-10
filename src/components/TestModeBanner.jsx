import React, { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";

export default function TestModeBanner() {
  const [visible, setVisible] = useState(false); // banner DOM me hai
  const [active, setActive] = useState(false); // animation chal rahi hai
  const [fadeOut, setFadeOut] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !active) {
            // jab page pe aaye tab start
            setVisible(true);
            setActive(true);

            setTimeout(() => {
              setFadeOut(true); // fade-out start
              setTimeout(() => setVisible(false), 600); // remove after animation
            }, 3000); // 3s wait
          }
        });
      },
      { threshold: 0.5 } // 50% visible hone par trigger
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, [active]);

  return (
    <>
      {/* 🔹 Yeh placeholder div scroll detection ke liye */}
      <div ref={bannerRef}></div>

      {visible && (
        <div
          className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center
            bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
            text-black py-3 px-6 shadow-lg rounded-b-xl
            transition-all duration-500
            ${fadeOut ? "animate-fadeOut" : "animate-fadeIn"}`}
        >
          <Info size={22} className="mr-2 text-black/80" />
          <p className="text-sm sm:text-base font-medium text-center">
            🚧 This website is currently in{" "}
            <span className="font-bold">Test Mode</span>.  
            Some features may not work as expected.
          </p>
        </div>
      )}

      {/* 🔹 Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-15px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-fadeOut {
          animation: fadeOut 0.6s ease-in forwards;
        }
      `}</style>
    </>
  );
}
