import { Request, Response } from "express";

export const apiTest = (req: Request, res: Response) => {
  res.json({ api: "user" });
};
