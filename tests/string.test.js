// tests/string.test.js
import { reverseString } from "../src/string.js";

describe("String Utilities", () => {
  test("reverses a string correctly", () => {
    const input = "hello";
    const expected = "olleh";
    const result = reverseString(input);

    expect(result).toBe(expected);
  });
});
