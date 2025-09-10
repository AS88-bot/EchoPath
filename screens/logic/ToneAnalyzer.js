export const detectTone = (input) => {
  if (input.match(/(confused|lost|stuck)/i)) return 'confused';
  if (input.match(/(sad|tired|overwhelmed)/i)) return 'overwhelmed';
  if (input.match(/(excited|happy|hopeful)/i)) return 'positive';
  return 'neutral';
};
