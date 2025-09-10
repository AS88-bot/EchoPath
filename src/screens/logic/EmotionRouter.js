export const routeEmotion = (input, state) => {
  const lowerInput = input.toLowerCase();

  if (state === "overwhelmed" || lowerInput.includes("too much") || lowerInput.includes("can't handle")) {
    return "You're not alone. Let's take this one step at a time.";
  }

  if (state === "confused" || lowerInput.includes("confused") || lowerInput.includes("unsure")) {
    return "Let’s find clarity together. What’s making you feel stuck?";
  }

  if (state === "positive" || lowerInput.includes("excited") || lowerInput.includes("happy")) {
    return "That’s wonderful to hear! Want to share what’s lifting you up?";
  }

  if (state === "neutral" && lowerInput.trim() === "") {
    return "I'm here whenever you're ready. Take your time.";
  }

  return "I'm here for you. Tell me more.";
};

