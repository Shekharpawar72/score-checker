# ATS Resume Score Checker

A modern web application built with React.js and Tailwind CSS that analyzes resumes against job descriptions using AI to provide ATS (Applicant Tracking System) compatibility scores and recommendations.

## Features

- 📄 **Resume Upload**: Support for PDF, DOC, DOCX, and TXT files
- 🤖 **AI-Powered Analysis**: Uses Google Gemini API for intelligent resume analysis
- 📊 **Detailed Scoring**: Overall score plus breakdowns for skills, experience, education, and keywords
- 🎯 **ATS Optimization**: Specific recommendations for improving ATS compatibility
- 💡 **Missing Keywords**: Identifies important keywords from job descriptions
- 📱 **Responsive Design**: Modern, mobile-friendly interface with Tailwind CSS
- ⚡ **Real-time Analysis**: Fast processing with loading states and progress indicators

## Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini API
- **File Handling**: React Dropzone
- **Icons**: Lucide React
- **Build Tool**: Vite

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

1. Copy the environment template:
```bash
cp .env.example .env
```

2. Get your Gemini API key:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the API key

3. Update the `.env` file:
```env
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. **Upload Resume**: Drag and drop or click to upload your resume (PDF, DOC, DOCX, or TXT)
2. **Enter Job Description**: Paste the job description you want to analyze against
3. **Analyze**: Click the "Analyze Resume" button to get your ATS score
4. **Review Results**: Get detailed feedback with specific recommendations

## Project Structure

```
src/
├── components/
│   ├── ResumeScoreChecker.jsx  # Main component
│   ├── FileUpload.jsx          # File upload handling
│   ├── JobDescriptionInput.jsx # Job description input
│   ├── ScoreDisplay.jsx        # Results display
│   └── LoadingSpinner.jsx      # Loading component
├── services/
│   └── geminiService.js        # AI integration
├── utils/
│   └── fileUtils.js           # File processing utilities
├── App.jsx                    # Main app component
├── App.css                    # Custom styles
└── main.jsx                   # Entry point
```

## API Integration

The application uses Google's Gemini API for resume analysis. The AI provides:

- Overall ATS compatibility score (0-100)
- Detailed breakdowns by category
- Specific strengths and improvement areas
- Missing keywords identification
- Actionable recommendations

## File Upload Support

- **Text Files (.txt)**: Full support with direct text extraction
- **PDF Files (.pdf)**: Basic support (requires additional setup for full parsing)
- **Word Documents (.doc, .docx)**: Basic support (requires additional setup for full parsing)

For best results, use text files or copy-paste resume content directly.

## Build for Production

```bash
npm run build
```

## Customization

### Adding New File Types

Update `fileUtils.js` to add support for additional file formats.

### Modifying Analysis Criteria

Update the prompt in `geminiService.js` to customize the analysis parameters.

### Styling Changes

Modify `App.css` or update Tailwind classes in components.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues or questions:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Ensure your API key is properly configured

## Roadmap

- [ ] Enhanced PDF parsing with pdf-parse library
- [ ] Support for more file formats
- [ ] Resume template suggestions
- [ ] Export analysis reports
- [ ] Resume optimization suggestions
- [ ] Multiple job description comparison
- [ ] Resume keyword highlighting
- [ ] Historical analysis tracking
