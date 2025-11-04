import { Repository } from "../libs/Repository";
import { Snippet, SnippetDetails } from "../models/Snippet";

export class SnippetRepository extends Repository {
  async findAll(status: string): Promise<SnippetDetails[] | null> {
    const query = {
      name: "find-public-snippets",
      text: `SELECT s.id_snippet,
                    s.title,
                    s.description,
                    s.code,
                    s.creation_date,
                    s.visibility,
                json_build_object(
                    'id', su.id_user,
                    'username', su.username,
                    'gender', su.gender,
                    'mail', su.mail_address
                  ) AS author,
                COALESCE(lang.languages, '[]')   AS languages,
                COALESCE(tg.tags, '[]')          AS tags,
                COALESCE(rt.raters, '[]')        AS ratings,
                COALESCE(cm.comments, '[]')      AS comments
                FROM snippet s
                JOIN site_user su ON su.id_user = s.user_id

                -- langues
                LEFT JOIN LATERAL (
                SELECT json_agg(cl.name ORDER BY cl.name) AS languages
                FROM utilize u
                JOIN code_language cl ON cl.id_language = u.language_id
                WHERE u.snippet_id = s.id_snippet
                ) lang ON TRUE

                -- tags
                LEFT JOIN LATERAL (
                  SELECT json_agg(t.name ORDER BY t.name) AS tags
                  FROM categorize c
                  JOIN tag t ON t.id_tag = c.tag_id
                  WHERE c.snippet_id = s.id_snippet
                ) tg ON TRUE

                -- notes
                LEFT JOIN LATERAL (
                  SELECT json_agg(json_build_object(
                          'user_id', r.user_id
                        )) AS raters
                  FROM rate r
                  WHERE r.snippet_id = s.id_snippet
                ) rt ON TRUE

                -- commentaires
                LEFT JOIN LATERAL (
                  SELECT json_agg(json_build_object(
                          'user_id', c.user_id,
                          'username', su2.username,
                          'message', c.message,
                          'creation_date', c.creation_date
                        ) ORDER BY c.creation_date) AS comments
                  FROM criticize c
                  JOIN site_user su2 ON su2.id_user = c.user_id
                  WHERE c.snippet_id = s.id_snippet
                ) cm ON TRUE

                WHERE s.visibility = $1;`,
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
          row.author,
          row.languages,
          row.tags,
          row.ratings,
          row.comments);
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
      text: `SELECT s.id_snippet,
                    s.title,
                    s.description,
                    s.code,
                    s.creation_date,
                    s.visibility,
                json_build_object(
                    'id', su.id_user,
                    'username', su.username,
                    'gender', su.gender,
                    'mail', su.mail_address
                  ) AS author,
                COALESCE(lang.languages, '[]')   AS languages,
                COALESCE(tg.tags, '[]')          AS tags,
                COALESCE(rt.raters, '[]')        AS ratings,
                COALESCE(cm.comments, '[]')      AS comments
                FROM snippet s
                JOIN site_user su ON su.id_user = s.user_id

                -- langues
                LEFT JOIN LATERAL (
                SELECT json_agg(cl.name ORDER BY cl.name) AS languages
                FROM utilize u
                JOIN code_language cl ON cl.id_language = u.language_id
                WHERE u.snippet_id = s.id_snippet
                ) lang ON TRUE

                -- tags
                LEFT JOIN LATERAL (
                  SELECT json_agg(t.name ORDER BY t.name) AS tags
                  FROM categorize c
                  JOIN tag t ON t.id_tag = c.tag_id
                  WHERE c.snippet_id = s.id_snippet
                ) tg ON TRUE

                -- notes
                LEFT JOIN LATERAL (
                  SELECT json_agg(json_build_object(
                          'user_id', r.user_id
                        )) AS raters
                  FROM rate r
                  WHERE r.snippet_id = s.id_snippet
                ) rt ON TRUE

                -- commentaires
                LEFT JOIN LATERAL (
                  SELECT json_agg(json_build_object(
                          'user_id', c.user_id,
                          'username', su2.username,
                          'message', c.message,
                          'creation_date', c.creation_date
                        ) ORDER BY c.creation_date) AS comments
                  FROM criticize c
                  JOIN site_user su2 ON su2.id_user = c.user_id
                  WHERE c.snippet_id = s.id_snippet
                ) cm ON TRUE

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
        result.rows[0].author,
        result.rows[0].languages,
        result.rows[0].tags,
        result.rows[0].ratings,
        result.rows[0].comments);

      return snippet;
    } catch (error) {
      console.log(error);
    }

    return null;
  };
}