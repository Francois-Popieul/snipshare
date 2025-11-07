import { Controller } from "../libs/Controller";
import { SnippetRepository } from "../repositories/SnippetRepository";

export class SnippetController extends Controller {
    async browsePublic() {
        const snippetRepository = new SnippetRepository();
        try {
            const snippets = await snippetRepository.findAll("public");

            if (!snippets || snippets.length === 0) {
                return this.response.status(404).json({ message: "Aucun snippet trouvé." });
            }

            return this.response.status(200).json({
                message: "Snippets récupérés avec succès",
                data: snippets,
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des snippets : ", error);
            return this.response.status(500).json({ message: "Erreur interne du serveur." });
        }
    };

    async browseById() {
        const snippetRepository = new SnippetRepository();
        const snippetId = this.request.params.id;

        try {
            const snippet = await snippetRepository.findByID(snippetId);

            if (!snippet) {
                return this.response.status(404).json({ message: "Snippet introuvable." });
            }

            return this.response.status(200).json({
                message: "Snippet récupéré avec succès",
                data: snippet,
            });
        } catch (error) {
            console.error("Erreur lors de la récupération du snippet : ", error);
            return this.response.status(500).json({ message: "Erreur interne du serveur." });
        }
    };

    async browseCreatedByUser() {
        const snippetRepository = new SnippetRepository();
        const userId = this.request.params.id;

        try {
            const snippets = await snippetRepository.findCreatedByUserID(userId);

            if (!snippets) {
                return this.response.status(404).json({ message: "Snippets introuvables." });
            }

            return this.response.status(200).json({
                message: "Snippets récupérés avec succès",
                data: snippets,
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des snippets : ", error);
            return this.response.status(500).json({ message: "Erreur interne du serveur." });
        }
    };

    async browseLikedByUser() {
        const snippetRepository = new SnippetRepository();
        const userId = this.request.params.id;

        try {
            const snippets = await snippetRepository.findLikedByUserID(userId);

            if (!snippets) {
                return this.response.status(404).json({ message: "Snippets introuvables." });
            }

            return this.response.status(200).json({
                message: "Snippets récupérés avec succès",
                data: snippets,
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des snippets : ", error);
            return this.response.status(500).json({ message: "Erreur interne du serveur." });
        }
    };
}
