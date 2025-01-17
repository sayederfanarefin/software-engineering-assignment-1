import express, { Express, Request, Response } from "express";
import factorialRoute from "./factorialRoute";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello! Visit /factorial/:num to compute the factorial of a number.");
});

app.get("/factorial/:num", factorialRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
