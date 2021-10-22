export const truncateString = (string: string, maxLength: number = 20) => {
  if (string.length <= maxLength + 3) return string;
  const first = string.substr(0, Math.round(maxLength / 2));
  const second = string.substr(Math.round(string.length - Math.round(maxLength / 2)));
  return first + '...' + second;
};