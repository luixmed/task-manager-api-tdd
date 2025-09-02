// tests/string.test.js
import { reverseString, isPalindrome } from "../src/string.js";

describe("String Utilities", () => {
  test("reverses a string correctly", () => {
    const input = "hello";
    const expected = "olleh";
    const result = reverseString(input);
    expect(result).toBe(expected);
  });

  test("reverse 'world' to 'dlrow'", () => {
    const input = "world";
    const expected = "dlrow";
    const result = reverseString(input);
    expect(result).toBe(expected);
  });

  test("returns true for a simple palindrome", () => {
    const input = "racecar";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });

  test("returns false for a word that is not a palindrome", () => {
    const input = "hello";
    const result = isPalindrome(input);
    expect(result).toBe(false);
  });
});
