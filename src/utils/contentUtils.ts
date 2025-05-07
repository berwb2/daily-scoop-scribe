
/**
 * Calculates estimated reading time in minutes
 * @param content HTML/Markdown content string
 * @param wordsPerMinute Average reading speed (default: 200)
 * @returns Estimated reading time in minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute = 200): number {
  // Strip HTML tags
  const text = content.replace(/<[^>]*>/g, '');
  
  // Count words
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  
  // Calculate reading time
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Return at least 1 minute
  return Math.max(1, readingTime);
}

/**
 * Extracts an excerpt from a longer content string
 * @param content HTML/Markdown content string
 * @param maxChars Maximum length of excerpt (default: 150)
 * @returns Plain text excerpt
 */
export function extractExcerpt(content: string, maxChars = 150): string {
  // Strip HTML tags
  const text = content.replace(/<[^>]*>/g, '');
  
  // Return truncated text with ellipsis if needed
  if (text.length <= maxChars) {
    return text;
  }
  
  // Find a good breaking point
  const truncated = text.substring(0, maxChars);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated + '...';
}
