import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // ✅ icon toggle
import { Link } from "react-router-dom";

export default function Signin({ onToggle }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false); // ✅ still needed for toggle
    const [errors, setErrors] = useState({});

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validate = () => {
        const newErrors = {};
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.password.trim()) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Sign in successful!");
            navigate("/"); // ✅ go to Home
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-white relative opacity-75 ">
            <div className="absolute inset-0  "></div>

            <div className="relative shadow-2xs shadow-blue-500 z-10 border border-white/10  bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] w-[90%] max-w-md rounded-2xl  p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2 bg-[#2a2a2a] rounded-full p-1">
                        <button
                            onClick={onToggle}
                            className="px-4 py-1 text-sm font-semibold text-white"
                        >
                            Sign up
                        </button>
                        <button className="px-4 py-1 text-sm font-semibold bg-blue-500 text-white  rounded-full">
                            Sign in
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-4">Welcome <span className="text-blue-500">Back</span> </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
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

                    {/* Password with eye icon toggle (no text button) */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-[#2a2a2a] p-3 pr-12 rounded-md outline-none placeholder:text-gray-400" // ✅ pr-12 for icon space
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute top-1/2 right-3 -translate-y-1/2 p-1 rounded-md hover:opacity-90 focus:outline-none focus:ring"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            title={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}{" "}
                            {/* ✅ icon only */}
                        </button>
                        {errors.password && (
                            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* OR Divider */}
              

                {/* Social */}
             

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
