import { Router } from "express";
import { snippetRouter } from "./snippet";
import { userRouter } from "./user";
import { authRouter } from "./auth";

const router = Router();

router.use("/snippets", snippetRouter);
router.use("/profile", userRouter);
router.use("/auth", authRouter);

export default router;
