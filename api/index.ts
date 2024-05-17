import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const connectionString: string = process.env.MONGO || "";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch((err: Error) => {
    console.error(err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
