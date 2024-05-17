import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRouter from "./routes/User.Route";
import AuthRouter from "./routes/Auth.Route";

dotenv.config();
const connectionString: string = process.env.MONGO || "";
const port = process.env.PORT;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch((err: Error) => {
    console.error(err);
  });

const app: Express = express();
app.use(express.json());
app.use("/api/users", UserRouter);
app.use("/api/auth", AuthRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
