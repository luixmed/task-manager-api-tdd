// tests/string.test.js
import { reverseString, isPalindrome, truncateString } from "../src/string.js";

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

  test("returns true for a complex palindrome ignoring case and non-alphanumeric characters", () => {
    const input = "A man, a plan, a canal, Panama!";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });

  test("truncates a string correctly", () => {
    const input = ["Hello", 10];
    const expected = "Hello";
    const result = truncateString(...input);
    expect(result).toBe(expected);
  });

  test("returns the truncate text for a text that is longer than maxLength", () => {
    const input = ["Hello, world!", 5];
    const expected = "Hello...";
    const result = truncateString(...input);
    expect(result).toBe(expected);
  });
});
