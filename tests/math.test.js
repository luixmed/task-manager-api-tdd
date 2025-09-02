// tests/math.test.js
import { add } from "../src/math.js";

describe("Math module", () => {
  test("adds 1 and 2 to make 3", () => {
    const result = add(1, 2);
    const expected = 3;

    expect(result).toBe(expected);
  });

  test("adds 5 and 7 to make 12", () => {
    const result = add(5, 7);
    const expected = 12;
    expect(result).toBe(expected);
  });
});
