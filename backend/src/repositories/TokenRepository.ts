import { Repository } from "../libs/Repository";

export class TokenRepository extends Repository {
    async createToken(
        id_user: number,
        token_value: string,
        expiry_date: string,
        creation_date: string
    ) {
        const query = {
            name: "create-token",
            text: `
            INSERT into token (
                id_user,
                token_value,
                expiry_date,
                creation_date
            ) 
            VALUES ($1, $2, $3, $4)
            RETURNING id_token
        `,
            values: [id_user, token_value, expiry_date, creation_date],
        };

        try {
            const result = await this.pool.query<{ id: number }>(query);

            if (result.rowCount === 0) return null;

            return result.rows[0].id;
        } catch (error) {
            console.log(error);
        }
    };
}