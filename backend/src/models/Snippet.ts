import { Language, Tag, Visibility } from "../types/types";

export class Snippet {
    protected id_snippet: number | null;
    protected title: string;
    protected description: string;
    protected code: string;
    protected creation_date: string;
    protected visibility: Visibility;
    protected user_id: number;

    constructor(id: number | null, title: string, description: string,
        code: string, creation_date: string, visibility: Visibility, user_id: number) {
        this.id_snippet = id;
        this.title = title;
        this.description = description;
        this.code = code;
        this.creation_date = creation_date;
        this.visibility = visibility;
        this.user_id = user_id;
    }
}

export class SnippetDetails {
    protected id_snippet: number | null;
    protected title: string;
    protected description: string;
    protected code: string;
    protected creation_date: string;
    protected visibility: Visibility;
    protected id_user: number;
    protected username: string;
    protected gender: string;
    protected mail_address: string;
    protected bio: string;
    protected language: string;
    protected tag: string;
    protected comment: string;
    protected comment_date: string;
    protected comment_author: string;


    constructor(id_snippet: number | null, title: string, description: string,
        code: string, creation_date: string, visibility: Visibility, id_user: number, username: string, gender: string, mail_address: string, bio: string,
        language: string, tag: string,
        comment: string, comment_date: string, comment_author: string) {
        this.id_snippet = id_snippet;
        this.title = title;
        this.description = description;
        this.code = code;
        this.creation_date = creation_date;
        this.visibility = visibility;
        this.id_user = id_user;
        this.username = username;
        this.gender = gender;
        this.mail_address = mail_address;
        this.bio = bio;
        this.language = language;
        this.tag = tag;
        this.comment = comment;
        this.comment_date = comment_date;
        this.comment_author = comment_author;
    }
}