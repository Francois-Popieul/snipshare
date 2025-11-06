import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const userRouter = Router();

// Browse user endpoint
userRouter.get("/:id", (request, response) => {
    const controller = new UserController(request, response);
    controller.findById();
});
