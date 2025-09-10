// import React, { useState } from "react";
// import Signup from "./Signup";
// import Signin from "./Signin";

// export default function AuthContainer() {
//   const [isSignup, setIsSignup] = useState(true);

//   return (
//     <div style={{
//       position: "relative",
//       zIndex: 1,
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "2rem",
//       color: "white"
//     }}>
//       {isSignup ? (
//         <Signup onToggle={() => setIsSignup(false)} />
//       ) : (
//         <Signin onToggle={() => setIsSignup(true)} />
//       )}
//     </div>
//   );
// }  


// import React, { useState } from "react";
// import Signup from "./Signup";
// import Signin from "./Signin";

// export default function AuthContainer() {
//   const [isSignup, setIsSignup] = useState(true);
  

//   return (
//     <div>
//       {isSignup ? (
//         <Signup onToggle={() => setIsSignup(false)} />
//       ) : (
//         <Signin onToggle={() => setIsSignup(true)} />
//       )}
        
      
//     </div>
//   );
// }












import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
// import "./FloatingBackground.css"; // yahan ek hi jagah import karo
import "../components/custom/FloatingBackground.css";

export default function AuthContainer() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] text-white px-4"
    >
      {/* Floating Boxes Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="box"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Auth Card (Signin / Signup) */}
      <div className="relative z-10 w-full max-w-md">
        {isSignup ? (
          <Signup onToggle={() => setIsSignup(false)} />
        ) : (
          <Signin onToggle={() => setIsSignup(true)} />
        )}
      </div>
    </div>
  );
}