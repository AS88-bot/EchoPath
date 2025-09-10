export function routeIntent(input) {
  const text = input.toLowerCase();
  if (text.includes("resume")) return "resume_review";
  if (text.includes("mentor")) return "mentorship_match";
  if (text.includes("career")) return "career_guidance";
  if (text.includes("stuck") || text.includes("burnout")) return "emotional_support";
  return "fallback";
}
