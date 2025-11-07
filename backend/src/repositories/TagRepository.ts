import { Repository } from "../libs/Repository";
import { Tag } from "../models/Tag";

export class TagRepository extends Repository {
    async findAll(): Promise<Tag[] | null> {
        const query = {
            name: "find-tags",
            text: "SELECT * FROM tag",
        };

        try {
            const result = await this.pool.query(query);

            if (result.rowCount === 0) return null;
            const tags: Tag[] = result.rows.map((row) => {
                return new Tag(
                    row.id_tag,
                    row.name);
            });
            return tags;
        } catch (error) {
            console.log(error);
        }

        return null;
    };
}