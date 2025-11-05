import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

export const authRouter = Router();

authRouter.post("/signup", (request, response) => {
    const controller = new AuthController(request, response);
    controller.signup();
});

authRouter.post("/login", (request, response) => {
    const controller = new AuthController(request, response);
    controller.login();
});
