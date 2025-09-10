
// import React, { useState } from "react";

// export default function Signup({ onToggle }) {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.firstName.trim())
//       newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone number must be 10 digits";
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
//       newErrors.password =
//         "Password must be at least 8 characters, include a number and an uppercase letter";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Account Created Successfully!");
//       // Submit form here (e.g., call API)
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white relative">
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900 opacity-30"></div>

//       <div className="relative z-10 bg-[#1E1E1E] w-[90%] max-w-md rounded-2xl shadow-xl p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex space-x-2 bg-[#2a2a2a] rounded-full p-1">
//             <button
//               onClick={onToggle}
//               className="px-4 py-1 text-sm font-semibold bg-white text-black rounded-full"
//             >
//               Sign up
//             </button>
//             <button
//               onClick={onToggle}
//               className="px-4 py-1 text-sm font-semibold text-white"
//             >
//               Sign in
//             </button>
//           </div>
//         </div>

//         <h2 className="text-xl font-semibold mb-4">Create an account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex space-x-2">
//             <div className="w-1/2">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
//               />
//               {errors.firstName && (
//                 <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
//               )}
//             </div>

//             <div className="w-1/2">
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
//               />
//               {errors.lastName && (
//                 <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
//             />
//             {errors.email && (
//               <p className="text-red-400 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
//             />
//             {errors.phone && (
//               <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
//             />
//             {errors.password && (
//               <p className="text-red-400 text-sm mt-1">{errors.password}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition"
//           >
//             Create an account
//           </button>
//         </form>

//         {/* OR Divider */}
//         <div className="flex items-center my-4">
//           <div className="flex-grow h-px bg-gray-600"></div>
//           <span className="px-4 text-gray-400 text-sm">OR SIGN IN WITH</span>
//           <div className="flex-grow h-px bg-gray-600"></div>
//         </div>

//         {/* Social Login Buttons */}
//         <div className="space-x-4 flex justify-center">
//           <button className="w-[200px] bg-[#2a2a2a] p-3 rounded-md flex justify-center items-center hover:bg-[#3a3a3a] transition">
//             <img
//               src="https://www.svgrepo.com/show/475656/google-color.svg"
//               alt="Google"
//               className="h-5"
//             />
//           </button>
//         </div>

//         <p className="text-xs text-gray-500 mt-6 text-center">
//           By creating an account, you agree to our{" "}
//           <a href="#" className="underline">
//             Terms & Service
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation
import { Link } from "react-router-dom";
export default function Signup({ onToggle }) {
  const navigate = useNavigate(); // ✅ hook for navigation

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } 
    // ✅ Updated regex: at least 8 chars, 1 uppercase, 1 number, 1 special char
    else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters, include a number, an uppercase letter, and a special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Account Created Successfully!");
      navigate("/"); // ✅ Redirect to Home page
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center opacity-75 text-white relative ">
      <div className="absolute inset-0  opacity-30"></div>

      <div className="relative shadow-2xs shadow-blue-500  border border-white/10 z-10 bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] w-[90%] max-w-md rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2 bg-[#2a2a2a] rounded-full p-1">
            <button
              onClick={onToggle}
              className="px-4 py-1 text-sm font-semibold bg-blue-500 text-white  rounded-full"
            >
              Sign up
            </button>
            <button
              onClick={onToggle}
              className="px-4 py-1 text-sm font-semibold text-white"
            >
              Sign in
            </button>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Create an <span className="text-blue-500">account</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#2a2a2a] p-3 rounded-md outline-none placeholder:text-gray-400"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition"
          >
            Create an account
          </button>
        </form>

   

        <p className="text-xs text-white mt-6 text-center">
                    By signing in, you agree to our{" "}
                    <Link to="/terms" className="underline">
  Terms & Service
</Link>
                </p>
      </div>
    </div>
  );
}
