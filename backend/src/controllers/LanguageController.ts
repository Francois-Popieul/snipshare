import { Controller } from "../libs/Controller";
import { LanguageRepository } from "../repositories/LanguageRepository";

export class LanguageController extends Controller {
    async browse() {
        const languageRepository = new LanguageRepository();
        try {
            const languages = await languageRepository.findAll();

            if (!languages || languages.length === 0) {
                return this.response.status(404).json({ message: "Aucun langage trouvé." });
            }

            return this.response.status(200).json({
                message: "Langages récupérés avec succès",
                data: languages,
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des langages : ", error);
            return this.response.status(500).json({ message: "Erreur interne du serveur." });
        }
    };
}