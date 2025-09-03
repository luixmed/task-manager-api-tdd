// src/string.js
export function reverseString(str) {
  return [...str].reverse().join("");
}

export function isPalindrome(str) {
  // 1. Clean the string: lowercase it and remove non-alphanumeric chars
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // 2. Compare the cleaned string to its reverse
  return cleanedStr === reverseString(cleanedStr);
}

export function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength)}...`;
  }
  return str;
}
