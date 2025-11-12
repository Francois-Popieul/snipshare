import { Controller } from "../libs/Controller";
import { NewSnippet } from "../libs/ZodValidator";
import { SnippetRepository } from "../repositories/SnippetRepository";
import zod from "zod";
import { Snippet } from "../types/types";

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

    async addSnippet() {
        const userID = this.request.body.userID;
        const snippetData = this.request.body.data;
        const snippetTags = this.request.body.selectedTags;
        const snippetRepository = new SnippetRepository();
        console.log(userID);
        console.log(snippetData);
        console.log(snippetTags);
        if (!userID) {
            this.response.status(400).json({ message: "Seuls les utilisateurs connectés peuvent ajouter un snippet." });
        }

        const zodResult = NewSnippet.safeParse({
            title: snippetData.title,
            description: snippetData.description,
            code: snippetData.code,
            visibility: snippetData.visibility,
        });

        if (!zodResult.success) {
            return this.response.status(400).json({ message: zod.prettifyError(zodResult.error), data: zod.flattenError(zodResult.error) })
        }

        try {
            const newSnippet: Snippet = {
                title: snippetData.title,
                description: snippetData.description,
                code: snippetData.code,
                creation_date: new Date().toISOString(),
                visibility: snippetData.visibility,
                user_id: userID,
            }

            const snippetID = await snippetRepository.addSnippet(newSnippet);

            if (!snippetID) {
                return this.response.status(404).json({ message: "Impossible d’ajouter le snippet." });
            }

            const snippetLanguageAdded = await snippetRepository.linkSnippetAndLanguage(snippetID.id_snippet, snippetData.language);

            const snippetTagAdded = await snippetRepository.linkSnippetAndTags(snippetID.id_snippet, snippetTags);

            if (snippetLanguageAdded === false || snippetTagAdded === false) {
                throw new Error("Erreur lors de la création du snippet.");
            }

            return this.response.status(200).json({
                message: "Snippet ajouté.",
            });
        } catch (error) {
            console.error("Erreur lors de l’ajout du snippet : ", error);
            return this.response.status(500).json({ message: "Erreur interne du serveur." });
        }
    }
}
