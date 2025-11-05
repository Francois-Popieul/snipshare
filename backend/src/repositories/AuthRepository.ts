import { Repository } from "../libs/Repository";

export class AuthRepository extends Repository {
    async findByEmail(email: string) {
        const query = {
            name: "find-user-by-email",
            text: "SELECT * FROM site_user WHERE mail_address = $1",
            values: [email],
        };

        try {
            const result = await this.pool.query(query);
            if (result.rowCount === 0) return null;

            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    };

    async createUser(username: string,
        gender: string,
        mail_address: string,
        hashedPassword: string,
        bio: string
    ) {
        const query = {
            name: "create-user",
            text: `INSERT into site_user (
                username,
                gender,
                mail_address, 
                password, 
                bio
            ) 
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id_user`,
            values: [username, gender, mail_address, hashedPassword, bio],
        };

        try {
            const result = await this.pool.query<{ id_user: number }>(query);
            if (result.rowCount === 0) return null;

            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    };
}