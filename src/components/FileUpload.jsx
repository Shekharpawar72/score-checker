import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X, AlertCircle } from 'lucide-react';
import { extractTextFromFile, validateFile } from '../utils/fileUtils';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    try {
      validateFile(file);
      
      // For demonstration, we'll handle text files and provide guidance for others
      if (file.type === 'text/plain') {
        const text = await extractTextFromFile(file);
        onFileUpload(file, text);
      } else {
        // For PDF/DOC files, show instructions for now
        const demoText = `
Resume uploaded: ${file.name}

For demo purposes, please note:
- PDF and DOC file parsing requires additional setup
- For best results, copy and paste your resume text, or
- Convert your resume to a .txt file

Sample resume content would include:
- Contact information
- Professional summary
- Work experience with achievements
- Education details
- Technical skills
- Certifications
        `;
        onFileUpload(file, demoText);
      }
    } catch (error) {
      console.error('Error processing file:', error);
      alert(`Error: ${error.message}`);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 lg:p-12 text-center cursor-pointer transition-all duration-300 file-upload-area ${
          isDragActive
            ? 'border-blue-400 bg-blue-500/10 scale-105 shadow-lg shadow-blue-500/25'
            : 'border-gray-600 hover:border-blue-400 hover:bg-gray-700/20 hover:shadow-md'
        }`}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center space-y-4">
          <div className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 ${isDragActive ? 'bg-blue-500/20 scale-110' : 'bg-gray-700/30'}`}>
            <Upload className={`${isDragActive ? 'text-blue-400' : 'text-gray-400'}`} size={window.innerWidth < 640 ? 28 : 36} />
          </div>
          
          <div>
            <p className="text-lg sm:text-xl font-medium text-gray-200 mb-2">
              {isDragActive ? 'Drop your resume here' : 'Upload your resume'}
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-2">
              Drag & drop or click to select
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Supports PDF, DOC, DOCX, TXT (max 10MB)
            </p>
          </div>
        </div>
      </div>

      {/* File format notice */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-900/30 border border-blue-500/30 rounded-xl backdrop-blur-sm">
        <div className="flex items-start space-x-2 sm:space-x-3">
          <AlertCircle className="text-blue-400 mt-0.5 flex-shrink-0" size={18} />
          <div className="text-sm">
            <p className="text-blue-300 font-medium mb-1">Best Results:</p>
            <p className="text-blue-400 text-xs sm:text-sm">
              For optimal text extraction, use .txt files or copy-paste your resume content directly.
            </p>
          </div>
        </div>
      </div>

      {acceptedFiles.length > 0 && (
        <div className="mt-4 sm:mt-6">
          <h4 className="text-sm font-medium text-gray-300 mb-3">Selected File:</h4>
          {acceptedFiles.map((file) => (
            <div key={file.name} className="flex items-center justify-between p-3 sm:p-4 bg-gray-700/50 rounded-xl border border-gray-600/50 shadow-sm backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FileText className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-gray-200 truncate max-w-xs">{file.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
