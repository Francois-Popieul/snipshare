import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { SnippetController } from "../controllers/SnippetController";

export const userRouter = Router();

userRouter.get("/created-snippets/:id", (request, response) => {
    const controller = new SnippetController(request, response);
    controller.browseCreatedByUser();
});

userRouter.get("/liked-snippets/:id", (request, response) => {
    const controller = new SnippetController(request, response);
    controller.browseLikedByUser();
});

userRouter.get("/:id", (request, response) => {
    const controller = new UserController(request, response);
    controller.findById();
});
