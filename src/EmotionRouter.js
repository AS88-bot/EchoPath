export const routeEmotion = (input, state) => {
  if (state === "overwhelmed") {
    return "You're not alone. Let's take this one step at a time.";
  }
  if (input.includes("confused")) {
    return "Let’s find clarity together. What’s making you feel stuck?";
  }
  return "I'm here for you. Tell me more.";
};
