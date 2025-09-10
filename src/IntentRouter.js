export function routeIntent(input, tone = "neutral") {
  const text = input.toLowerCase();

  if (text.includes("resume") || text.includes("cv")) return "resume_review";
  if (text.includes("mentor") || text.includes("guidance")) return "mentorship_match";
  if (text.includes("career") || text.includes("job") || text.includes("future")) return "career_guidance";

  if (
    text.includes("stuck") ||
    text.includes("burnout") ||
    text.includes("lost") ||
    tone === "overwhelmed" ||
    tone === "confused"
  ) {
    return "emotional_support";
  }

  return "fallback";
}
