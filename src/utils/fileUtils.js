// Simple text extraction utilities for different file types

export const extractTextFromFile = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async (e) => {
      try {
        const content = e.target.result;
        
        if (file.type === 'application/pdf') {
          // For PDF files, we'll extract text using a simple approach
          // In production, you'd want to use a proper PDF parser like pdf-parse
          try {
            const text = await extractPDFText(content);
            resolve(text);
          } catch (error) {
            // Fallback: ask user to copy-paste or convert to text
            resolve("PDF text extraction not available. Please convert your PDF to text format or copy-paste the content.");
          }
        } else if (file.type === 'text/plain') {
          resolve(content);
        } else if (file.type.includes('document') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
          // For Word documents, basic text extraction
          const text = extractTextFromWordDoc(content);
          resolve(text);
        } else {
          // Try to read as text
          resolve(content);
        }
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    
    if (file.type === 'application/pdf') {
      reader.readAsArrayBuffer(file);
    } else {
      reader.readAsText(file);
    }
  });
};

const extractPDFText = async (arrayBuffer) => {
  // This is a simplified PDF text extraction
  // For production use, implement proper PDF parsing with pdf-parse or similar
  throw new Error('PDF parsing requires additional setup');
};

const extractTextFromWordDoc = (content) => {
  // Basic text extraction from Word documents
  // This is a simplified approach - for production, use proper parsers
  if (typeof content === 'string') {
    // Remove XML tags and clean up
    return content
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  return "Word document text extraction not available. Please convert to text format.";
};

export const validateFile = (file) => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = [
    'application/pdf',
    'text/plain',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (file.size > maxSize) {
    throw new Error('File size exceeds 10MB limit');
  }
  
  if (!allowedTypes.includes(file.type) && 
      !file.name.toLowerCase().endsWith('.txt') &&
      !file.name.toLowerCase().endsWith('.doc') &&
      !file.name.toLowerCase().endsWith('.docx') &&
      !file.name.toLowerCase().endsWith('.pdf')) {
    throw new Error('Unsupported file type. Please use PDF, DOC, DOCX, or TXT files.');
  }
  
  return true;
};
