import { Request, Response } from "express";
import factorial from "./factorial";

export default (req: Request, res: Response): void => {
  const { num } = req.params;
  const parsedNum = parseInt(num, 10);
  const value = factorial(parsedNum);

  if (value < 0) {
    res.send(`factorial(${parsedNum}) is undefined for negative integers`);
  } else {
    res.send(`factorial(${parsedNum}) is ${value}`);
  }
};
