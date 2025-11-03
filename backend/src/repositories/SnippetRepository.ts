import { Repository } from "../libs/Repository";
import { Snippet, SnippetDetails } from "../models/Snippet";

export class SnippetRepository extends Repository {
  async findAll(status: string): Promise<SnippetDetails[] | null> {
    const query = {
      name: "find-public-snippets",
      text: `SELECT
            s.id_snippet, s.title, s.description, s.code, s.creation_date, s.visibility,
            u.id_user, u.username, u.gender, u.mail_address, u.bio,
            cl.name AS language,
            t.name AS tag,
            c.message AS comment,
            c.creation_date AS comment_date,
            cu.username AS comment_author

            FROM snippet s
            JOIN site_user u ON s.user_id = u.id_user
            LEFT JOIN use us ON s.id_snippet = us.snippet_id
            LEFT JOIN code_language cl ON us.language_id = cl.id_language
            LEFT JOIN categorize cat ON s.id_snippet = cat.snippet_id
            LEFT JOIN tag t ON cat.tag_id = t.id_tag
            LEFT JOIN comment c ON s.id_snippet = c.snippet_id
            LEFT JOIN site_user cu ON c.user_id = cu.id_user

            WHERE s.visibility = $1
            ORDER BY s.id_snippet;`,
      values: [status]
    };

    try {
      const result = await this.pool.query(query);

      if (result.rowCount === 0) return null;

      console.log(result.rows[0]);

      const snippets: SnippetDetails[] = result.rows.map((row) => {
        return new SnippetDetails(
          row.id_snippet,
          row.title,
          row.description,
          row.code,
          row.creation_date,
          row.visibility,
          row.id_user,
          row.username,
          row.gender,
          row.mail_address,
          row.bio,
          row.language,
          row.tag,
          row.comment,
          row.comment_date,
          row.comment_author);
      });

      return snippets;
    } catch (error) {
      console.log(error);
    }

    return null;
  };

  async findByID(id: string): Promise<SnippetDetails | null> {
    const query = {
      name: "find-snippet",
      text: `SELECT
            s.id_snippet, s.title, s.description, s.code, s.creation_date, s.visibility,
            u.id_user, u.username, u.gender, u.mail_address, u.bio,
            cl.name AS language,
            t.name AS tag,
            c.message AS comment,
            c.creation_date AS comment_date,
            cu.username AS comment_author

            FROM snippet s
            JOIN site_user u ON s.user_id = u.id_user
            LEFT JOIN use us ON s.id_snippet = us.snippet_id
            LEFT JOIN code_language cl ON us.language_id = cl.id_language
            LEFT JOIN categorize cat ON s.id_snippet = cat.snippet_id
            LEFT JOIN tag t ON cat.tag_id = t.id_tag
            LEFT JOIN comment c ON s.id_snippet = c.snippet_id
            LEFT JOIN site_user cu ON c.user_id = cu.id_user

            WHERE s.id_snippet = $1;`,
      values: [id],
    };

    try {
      const result = await this.pool.query(query);

      if (result.rowCount === 0) return null;

      const snippet = new SnippetDetails(
        result.rows[0].id_snippet,
        result.rows[0].title,
        result.rows[0].description,
        result.rows[0].code,
        result.rows[0].creation_date,
        result.rows[0].visibility,
        result.rows[0].id_user,
        result.rows[0].username,
        result.rows[0].gender,
        result.rows[0].mail_address,
        result.rows[0].bio,
        result.rows[0].language,
        result.rows[0].tag,
        result.rows[0].comment,
        result.rows[0].comment_date,
        result.rows[0].comment_author);


      return snippet;
    } catch (error) {
      console.log(error);
    }

    return null;
  };
}