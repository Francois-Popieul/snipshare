import { Controller } from "../libs/Controller";
import { TagRepository } from "../repositories/TagRepository";

export class TagController extends Controller {
    async browse() {
        const tagRepository = new TagRepository();
        try {
            const tags = await tagRepository.findAll();

            if (!tags || tags.length === 0) {
                return this.response.status(404).json({ message: "Aucune étiquette trouvée." });
            }

            return this.response.status(200).json({
                message: "Étiquettes récupérées avec succès",
                data: tags,
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des étiquettes : ", error);
            return this.response.status(500).json({ message: "Erreur interne du serveur." });
        }
    };
}