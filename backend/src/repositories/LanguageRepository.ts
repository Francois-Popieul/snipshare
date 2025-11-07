import { Repository } from "../libs/Repository";
import { Language } from "../models/Language";

export class LanguageRepository extends Repository {
    async findAll(): Promise<Language[] | null> {
        const query = {
            name: "find-languages",
            text: "SELECT * FROM code_language",
        };

        try {
            const result = await this.pool.query(query);

            if (result.rowCount === 0) return null;
            const languages: Language[] = result.rows.map((row) => {
                return new Language(
                    row.id_language,
                    row.name);
            });
            return languages;
        } catch (error) {
            console.log(error);
        }

        return null;
    };
}