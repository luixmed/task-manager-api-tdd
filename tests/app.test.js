// tests/app.test.js
import express from "express";
import { jest } from "@jest/globals";
import { app } from "../src/app.js";

describe("Server Initialization", () => {
  test("should import the app module without errors", () => {
    expect(app).toBeDefined();
  });

  test("should have a start method that begins listening on a port", () => {
    const listenSpy = jest
      .spyOn(app, "listen")
      .mockImplementation((port, callback) => {
        callback(); // Simulate success
        return { close: jest.fn() }; // Return a mock server object
      });
    const PORT = 4000;
    app.start(PORT);

    expect(listenSpy).toHaveBeenCalledWith(PORT, expect.any(Function));

    listenSpy.mockRestore();
  });
});
