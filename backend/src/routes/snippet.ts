import { Router } from "express";
import { SnippetController } from "../controllers/SnippetController";

export const snippetRouter = Router();

// Browse snippet endpoint
snippetRouter.get("/", (request, response) => {
    const controller = new SnippetController(request, response);
    controller.browsePublic();
});

snippetRouter.get("/:id", (request, response) => {
    const controller = new SnippetController(request, response);
    controller.browseById();
});
