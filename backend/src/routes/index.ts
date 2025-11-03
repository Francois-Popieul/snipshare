import { Router } from "express";
import { snippetRouter } from "./snippet";
import { userRouter } from "./user";

const router = Router();

router.use("/snippets", snippetRouter);
router.use("/profile", userRouter);

export default router;
