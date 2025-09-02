// src/app.js
import express from "express";

// 1. Create a real Express application instance
const app = express();

// 2. Add a start method to it that calls app.listen
app.start = (port) => {
  return app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

export { app };
