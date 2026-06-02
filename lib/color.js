// /Users/entheos/Documents/Backyard Bounty/lib/color.js
export function hexToRgba(hex, alpha) {
  const normalizedHex = hex.replace("#", "");
  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
