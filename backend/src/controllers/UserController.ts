import { Controller } from "../libs/Controller";
import { UserRepository } from "../repositories/UserRepository";

/**
 * Contrôleur gérant les utilisateurs.
 */
export class UserController extends Controller {
    async findById() {
        // const userId = this.request.params.id;
        // const userRepository = new UserRepository();

        // try {
        //     const user = await userRepository.findUserData(userId);
        //     console.log(user);

        //     if (!user || user.length === 0) {
        //         return this.response.status(404).json({ message: "Utilisateur introuvable." });
        //     }

        //     return this.response.status(200).json({
        //         message: "Données de l'utilisateur récupérées",
        //         data: user,
        //     });
        // } catch (error) {
        //     console.error("Erreur lors de la récupération des données de l'utilisateur : ", error);
        //     return this.response.status(500).json({ message: "Erreur interne du serveur." });
        // }

        return this.response.status(200).json({
            message: "Réponse du contrôleur de l'utilisateur",
        });
    };
}
