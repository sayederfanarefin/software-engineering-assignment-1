import express from "express";
import request from "supertest";
import factorialRoute from "../src/factorialRoute";

const app = express();
app.get("/factorial/:num", factorialRoute);

describe("Factorial Endpoint Tests", () => {
  it("should handle 0 correctly", async () => {
    const response = await request(app).get("/factorial/0");
    expect(response.text).toBe("factorial(0) is 1");
  });

  it("should handle 1 correctly", async () => {
    const response = await request(app).get("/factorial/1");
    expect(response.text).toBe("factorial(1) is 1");
  });

  it("should handle negative numbers correctly", async () => {
    const response = await request(app).get("/factorial/-2");
    expect(response.text).toBe("factorial(-2) is undefined for negative integers");
  });

  it("should handle a positive integer", async () => {
    const response = await request(app).get("/factorial/5");
    expect(response.text).toBe("factorial(5) is 120");
  });
});
