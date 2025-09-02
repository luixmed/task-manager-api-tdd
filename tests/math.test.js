// tests/math.test.js
import { add } from "../src/math.js";

describe("Math module", () => {
  test("adds two numbers correctly", () => {
    const result = add(1, 2);
    const expected = 3;

    expect(result).toBe(expected);
  });
});
