export function createExcerpt(content: string, length: number = 160): string {
  // Remove HTML tags
  const cleanContent = content.replace(/<[^>]*>/g, "")

  if (cleanContent.length <= length) return cleanContent

  // Find the last complete word within the length limit
  const truncated = cleanContent.substring(0, length)
  const lastSpaceIndex = truncated.lastIndexOf(" ")

  if (lastSpaceIndex === -1) return truncated + "..."

  return truncated.substring(0, lastSpaceIndex) + "..."
}
