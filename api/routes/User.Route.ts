import express, { Request, Response } from "express";
import { apiTest } from "../controllers/User.Controller";

const router = express.Router();

router.get("/", apiTest);

export default router;
