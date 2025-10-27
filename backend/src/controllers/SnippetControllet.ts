import { Controller } from "../libs/Controller";

/**
 * Contrôleur gérant les équipes.
 */
export class SnippetController extends Controller {
    browse = () => {
        return this.response.status(200).json({ test: "hello" });
    };
}
