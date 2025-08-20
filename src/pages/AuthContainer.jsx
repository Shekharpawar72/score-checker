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


import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";

export default function AuthContainer() {
  const [isSignup, setIsSignup] = useState(true);
  

  return (
    <div>
      {isSignup ? (
        <Signup onToggle={() => setIsSignup(false)} />
      ) : (
        <Signin onToggle={() => setIsSignup(true)} />
      )}
        
      
    </div>
  );
}
