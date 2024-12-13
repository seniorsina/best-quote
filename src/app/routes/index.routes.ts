import express, { Request, Router } from "express";
import { userRouter } from "./user.routes";
import { authorRouter } from "./author.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/authors", authorRouter);
export default router;
