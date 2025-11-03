import { Controller } from "../libs/Controller";

/**
 * Contrôleur gérant les utilisateurs.
 */
export class UserController extends Controller {
    browse = () => {
        return this.response.status(200).json({ test: "Réponse du contrôleur d'utilisateurs" });
    };
}
