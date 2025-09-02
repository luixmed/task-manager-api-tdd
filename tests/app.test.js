// tests/app.test.js
import { app } from "../src/app.js";

// This test is simple:
// if the import above doesn't throw an error, it passes.
describe("Server Initialization", () => {
  test("should import the app module without errors", () => {
    // We don't need an explicit assertion here
    // the test failing to run is the failure.
    expect(app).toBeDefined();
  });
});
