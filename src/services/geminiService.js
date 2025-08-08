import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI
const initializeGemini = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('Gemini API key not found. Please set VITE_GEMINI_API_KEY in your environment variables.');
  }
  
  return new GoogleGenerativeAI(apiKey);
};

export const analyzeResumeWithGemini = async (resumeText, jobDescription) => {
  try {
    const genAI = initializeGemini();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
As an expert ATS (Applicant Tracking System) and recruitment specialist, analyze the following resume against the provided job description. Provide a comprehensive analysis with specific scores and actionable feedback.

**RESUME:**
${resumeText}

**JOB DESCRIPTION:**
${jobDescription}

Please analyze and provide a response in the following JSON format:

{
  "overallScore": [number 0-100],
  "skillsMatch": [number 0-100],
  "experienceMatch": [number 0-100],
  "educationMatch": [number 0-100],
  "keywordDensity": [number 0-100],
  "strengths": [
    "Specific strength 1",
    "Specific strength 2",
    "Specific strength 3"
  ],
  "improvements": [
    "Specific improvement 1",
    "Specific improvement 2",
    "Specific improvement 3"
  ],
  "missingKeywords": [
    "keyword1",
    "keyword2",
    "keyword3"
  ],
  "recommendations": [
    {
      "title": "Recommendation Title",
      "description": "Detailed recommendation description"
    }
  ],
  "summary": "A comprehensive summary of the analysis with specific advice for improving ATS compatibility and match percentage."
}

**Scoring Criteria:**
- Overall Score: Weighted average considering all factors
- Skills Match: How well technical and soft skills align (0-100)
- Experience Match: Relevance of work experience to job requirements (0-100)
- Education Match: How well education aligns with requirements (0-100)
- Keyword Density: Presence of important keywords from job description (0-100)

**Analysis Guidelines:**
- Be specific and actionable in feedback
- Focus on ATS optimization
- Identify exact missing keywords
- Provide concrete improvement suggestions
- Consider industry standards and best practices
- Analyze formatting, structure, and content
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format from AI');
    }
    
    const analysisResult = JSON.parse(jsonMatch[0]);
    
    // Validate and sanitize the response
    return {
      overallScore: Math.max(0, Math.min(100, analysisResult.overallScore || 0)),
      skillsMatch: Math.max(0, Math.min(100, analysisResult.skillsMatch || 0)),
      experienceMatch: Math.max(0, Math.min(100, analysisResult.experienceMatch || 0)),
      educationMatch: Math.max(0, Math.min(100, analysisResult.educationMatch || 0)),
      keywordDensity: Math.max(0, Math.min(100, analysisResult.keywordDensity || 0)),
      strengths: analysisResult.strengths || [],
      improvements: analysisResult.improvements || [],
      missingKeywords: analysisResult.missingKeywords || [],
      recommendations: analysisResult.recommendations || [],
      summary: analysisResult.summary || 'Analysis completed successfully.'
    };
    
  } catch (error) {
    console.error('Error analyzing resume with Gemini:', error);
    throw new Error(`Analysis failed: ${error.message}`);
  }
};

// Alternative analysis function for demo purposes (if API key is not available)
export const getDemoAnalysis = () => {
  return {
    overallScore: 75,
    skillsMatch: 80,
    experienceMatch: 70,
    educationMatch: 85,
    keywordDensity: 65,
    strengths: [
      "Strong technical skills in modern web technologies",
      "Relevant work experience in software development",
      "Good educational background in Computer Science",
      "Experience with popular frameworks and libraries"
    ],
    improvements: [
      "Add more specific metrics and achievements",
      "Include cloud platform experience (AWS, Azure)",
      "Mention experience with testing frameworks",
      "Add more keywords related to database management"
    ],
    missingKeywords: [
      "Docker", "Kubernetes", "CI/CD", "AWS", "Microservices", 
      "Unit Testing", "PostgreSQL", "Agile", "Scrum"
    ],
    recommendations: [
      {
        title: "Optimize Keywords",
        description: "Include more technical keywords from the job description, especially cloud technologies and DevOps tools."
      },
      {
        title: "Quantify Achievements",
        description: "Add specific metrics and numbers to demonstrate impact, such as 'Improved application performance by 40%' or 'Managed team of 5 developers'."
      },
      {
        title: "Technical Skills Section",
        description: "Create a dedicated technical skills section with all relevant technologies, frameworks, and tools."
      }
    ],
    summary: "Your resume shows strong technical capabilities and relevant experience. To improve ATS compatibility, focus on incorporating more industry-specific keywords, quantifying your achievements with metrics, and ensuring your technical skills section comprehensively covers the job requirements. Consider adding experience with cloud platforms and modern development practices to strengthen your profile."
  };
};
