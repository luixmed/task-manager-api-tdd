// src/string.js
export function reverseString(str) {
  return [...str].reverse().join("");
}

export function isPalindrome(str) {
  return str === reverseString(str);
}
