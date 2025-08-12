import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { CloudUpload } from "lucide-react";

export default function AIInterviewForm() {
  const navigate = useNavigate(); // ✅ hook for navigation

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    experience: "",
    difficulty: "",
    duration: "",
    techstack: "",
  });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setResume(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.company)
      newErrors.company = "Company description is required.";
    if (!formData.role) newErrors.role = "Job role is required.";
    if (!formData.experience || Number(formData.experience) < 0)
      newErrors.experience = "Enter a valid experience.";
    if (!formData.difficulty)
      newErrors.difficulty = "Difficulty level is required.";
    if (!formData.duration)
      newErrors.duration = "Interview duration is required.";
    if (!formData.techstack) newErrors.techstack = "Tech stack is required.";
    if (!resume) newErrors.resume = "Please upload your resume.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Submitted data:", formData);
    console.log("Resume:", resume);
    alert("Interview form submitted successfully!");
    navigate("/rules");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-3xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">
          AI Interview Experience Form
        </h2>

        {/* <div>
          <label htmlFor="company" className="block font-medium mb-1">Company Description</label>
          <textarea
            id="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Describe the company..."
            className="mt-1 bg-gray-700 border-none text-white focus:ring-2 focus:ring-purple-500 w-full rounded-lg p-2"
          />
          {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
        </div> */}

        <div>
          <label htmlFor="company" className="block font-medium mb-1">
            Company Description
          </label>
          <textarea
            id="company"
            rows={5}
            value={formData.company}
            onChange={handleChange}
            placeholder="Describe the company..."
            className="mt-1 bg-gray-700 border-none text-white focus:ring-2 focus:ring-purple-500 w-full rounded-lg p-2 resize-none overflow-y-auto"
          />
          {errors.company && (
            <p className="text-red-400 text-sm mt-1">{errors.company}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="role" className="block font-medium mb-1">
              Job Role
            </label>
            <input
              id="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Frontend Developer, Backend Engineer, etc."
              className="mt-1 bg-gray-700 border-none text-white focus:ring-2 focus:ring-purple-500 w-full rounded-lg p-2"
            />
            {errors.role && (
              <p className="text-red-400 text-sm mt-1">{errors.role}</p>
            )}
          </div>

          <div>
            <label htmlFor="experience" className="block font-medium mb-1">
              Experience (in years)
            </label>
            <input
              id="experience"
              type="number"
              min="0"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 2"
              className="mt-1 bg-gray-700 border-none text-white focus:ring-2 focus:ring-purple-500 w-full rounded-lg p-2"
            />
            {errors.experience && (
              <p className="text-red-400 text-sm mt-1">{errors.experience}</p>
            )}
          </div>

          <div>
            <label htmlFor="difficulty" className="block font-medium mb-1">
              Difficulty Level
            </label>
            <input
              id="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              placeholder="Easy, Medium, Hard"
              className="mt-1 bg-gray-700 border-none text-white focus:ring-2 focus:ring-purple-500 w-full rounded-lg p-2"
            />
            {errors.difficulty && (
              <p className="text-red-400 text-sm mt-1">{errors.difficulty}</p>
            )}
          </div>

          <div>
            <label htmlFor="duration" className="block font-medium mb-1">
              Interview Duration
            </label>
            <input
              id="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 45 minutes"
              className="mt-1 bg-gray-700 border-none text-white focus:ring-2 focus:ring-purple-500 w-full rounded-lg p-2"
            />
            {errors.duration && (
              <p className="text-red-400 text-sm mt-1">{errors.duration}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="techstack" className="block font-medium mb-1">
            Tech Stack
          </label>
          <textarea
            id="techstack"
            rows={4}
            value={formData.techstack}
            onChange={handleChange}
            placeholder="React, Node.js, Java, etc."
            className="mt-1 bg-gray-700 border-none text-white focus:ring-2 focus:ring-purple-500 w-full rounded-lg p-2 resize-none overflow-y-auto"
          />
          {errors.techstack && (
            <p className="text-red-400 text-sm mt-1">{errors.techstack}</p>
          )}
        </div>

        {/* ya mane comment out kr diya ha yr thik ha  */}
         <div
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
          className={`mt-6 p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-colors ${
            resume
              ? "border-green-400 bg-green-900/20"
              : "border-gray-600 hover:border-purple-500"
          }`}
        >
          <CloudUpload className="h-12 w-12 text-purple-400" />
          <p className="mt-2 text-sm">
            Drag & drop your resume/CV here or click to upload
          </p>
          <input
            type="file"
            onChange={handleFileSelect}
            className="hidden"
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            className="cursor-pointer mt-2 text-purple-300 underline"
          >
            {resume ? resume.name : "Browse Files"}
          </label>
          {errors.resume && (
            <p className="text-red-400 text-sm mt-2">{errors.resume}</p>
          )}
        </div> 

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[260px] flex justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}



















// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import { CloudUpload } from "lucide-react";

// export default function AIInterviewForm() {
//   const navigate = useNavigate(); // <-- For navigation
//   const [formData, setFormData] = useState({
//     company: "",
//     role: "",
//     experience: "",
//     difficulty: "",
//     duration: "",
//     techstack: "",
//   });
//   const [resume, setResume] = useState(null);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     setResume(file);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.company) newErrors.company = "Company description is required.";
//     if (!formData.role) newErrors.role = "Job role is required.";
//     if (!formData.experience || Number(formData.experience) < 0)
//       newErrors.experience = "Enter a valid experience.";
//     if (!formData.difficulty) newErrors.difficulty = "Difficulty level is required.";
//     if (!formData.duration) newErrors.duration = "Interview duration is required.";
//     if (!formData.techstack) newErrors.techstack = "Tech stack is required.";
//     if (!resume) newErrors.resume = "Please upload your resume.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     console.log("Form Data:", formData);
//     console.log("Resume:", resume);

//     // Redirect to rules page after form submission
//     navigate("/rules");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center items-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-3xl space-y-6"
//       >
//         <h2 className="text-3xl font-bold text-center">
//           AI Interview Experience Form
//         </h2>

//         {/* Company Description */}
//         <div>
//           <label htmlFor="company" className="block font-medium mb-1">
//             Company Description
//           </label>
//           <textarea
//             id="company"
//             rows={5}
//             value={formData.company}
//             onChange={handleChange}
//             placeholder="Describe the company..."
//             className="mt-1 bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 w-full rounded-lg p-2 resize-none"
//           />
//           {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
//         </div>

//         {/* Other Inputs */}
//         {/* ... keep your existing fields here ... */}

//         {/* Resume Upload */}
//         <div className="mt-4">
//           <label className="block font-medium mb-1">Upload Resume</label>
//           <input type="file" onChange={handleFileSelect} className="block w-full text-white" />
//           {errors.resume && <p className="text-red-400 text-sm mt-1">{errors.resume}</p>}
//         </div>

//         {/* Submit */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="w-[260px] bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
