import { Router } from "express";
import { SnippetController } from "../controllers/SnippetController";
import { TagController } from "../controllers/TagController";
import { LanguageController } from "../controllers/LanguageController";

export const snippetRouter = Router();

snippetRouter.get("/", (request, response) => {
    const controller = new SnippetController(request, response);
    controller.browsePublic();
});

snippetRouter.get("/languages", (request, response) => {
    const controller = new LanguageController(request, response);
    controller.browse();
});

snippetRouter.get("/tags", (request, response) => {
    const controller = new TagController(request, response);
    controller.browse();
});

snippetRouter.post("/creation", (request, response) => {
    const controller = new SnippetController(request, response);
    controller.addSnippet();
});

snippetRouter.get("/:id", (request, response) => {
    const controller = new SnippetController(request, response);
    controller.browseById();
});
