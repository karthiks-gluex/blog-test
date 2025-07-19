export function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function calculateReadingTime(content: string): string {
  const minutes = getReadingTime(content)
  return `${minutes} min read`
}
