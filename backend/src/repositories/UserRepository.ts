import { Repository } from "../libs/Repository";
import { User } from "../types/types";

export class UserRepository extends Repository {
    async findUserData(id: string): Promise<User | null> {
        const query = {
            name: "find-user-data",
            text: "SELECT * FROM site_user WHERE site_user.id_user = $1",
            values: [id],
        };

        try {
            const result = await this.pool.query(query);

            if (result.rowCount === 0) return null;
            const user = result.rows[0];
            return user;
        } catch (error) {
            console.error(error);
        }

        return null;
    };
}