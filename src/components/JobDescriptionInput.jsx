import React from 'react';
import { Briefcase } from 'lucide-react';

const JobDescriptionInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const sampleJobDescription = `Software Engineer - Full Stack Developer

We are looking for a talented Full Stack Developer to join our dynamic team. The ideal candidate will have experience with modern web technologies and a passion for creating exceptional user experiences.

Key Responsibilities:
• Develop and maintain web applications using React.js and Node.js
• Design and implement RESTful APIs
• Work with databases (MongoDB, PostgreSQL)
• Collaborate with cross-functional teams
• Participate in code reviews and maintain code quality
• Implement responsive design principles

Required Skills:
• Bachelor's degree in Computer Science or related field
• 3+ years of experience in full-stack development
• Proficiency in JavaScript, HTML, CSS
• Experience with React.js, Node.js, Express.js
• Knowledge of database design and SQL
• Familiarity with Git version control
• Understanding of Agile development methodologies

Preferred Qualifications:
• Experience with cloud platforms (AWS, Azure)
• Knowledge of containerization (Docker, Kubernetes)
• Familiarity with CI/CD pipelines
• Experience with testing frameworks`;

  const handleUseSample = () => {
    onChange(sampleJobDescription);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 space-y-2 sm:space-y-0">
        <label htmlFor="jobDescription" className="block text-sm sm:text-base font-medium text-gray-200">
          Job Description
        </label>
        <button
          type="button"
          onClick={handleUseSample}
          className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 underline transition-colors duration-200 self-start sm:self-auto"
        >
          Use Sample Job Description
        </button>
      </div>
      
      <textarea
        id="jobDescription"
        value={value}
        onChange={handleChange}
        placeholder="Paste the job description here. Include requirements, responsibilities, and preferred qualifications for the best analysis..."
        className="w-full h-48 sm:h-56 lg:h-64 p-4 sm:p-5 bg-gray-700/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md text-gray-200 placeholder-gray-400 backdrop-blur-sm"
      />
      
      <div className="mt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
        <p className="text-xs sm:text-sm text-gray-400">
          {value.length} characters
        </p>
        <p className="text-xs sm:text-sm text-gray-400">
          Minimum 100 characters recommended
        </p>
      </div>

      {value.length > 0 && value.length < 100 && (
        <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-yellow-900/30 border border-yellow-500/30 rounded-xl text-sm shadow-sm backdrop-blur-sm">
          <p className="text-yellow-300">
            💡 For better analysis, try to include more details about job requirements and responsibilities.
          </p>
        </div>
      )}
    </div>
  );
};

export default JobDescriptionInput;
