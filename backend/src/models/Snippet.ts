import { Language, Tag, Visibility } from "../types/types";

export interface Author {
    id: number;
    username: string;
    gender: string;
    mail: string;
    bio: string;
}

export interface Rating {
    user_id: number;
}

export interface Comment {
    user_id: number;
    username: string;
    message: string;
    creation_date: string;
}

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
    protected id_snippet: number;
    protected title: string;
    protected description: string;
    protected code: string;
    protected creation_date: string;
    protected visibility: Visibility;
    protected author: {
        id: number,
        username: string,
        gender: string,
        mail: string,
        bio: string,
    };
    protected languages: Language[];
    protected tags: Tag[];
    protected ratings: {
        user_id: number,
    }[];
    protected comments: {
        user_id: number,
        username: string,
        message: string,
        creation_date: string,
    }[];

    constructor(id_snippet: number, title: string, description: string,
        code: string, creation_date: string, visibility: Visibility, author: Author, languages: Language[], tags: Tag[], ratings: Rating[], comments: Comment[]) {
        this.id_snippet = id_snippet;
        this.title = title;
        this.description = description;
        this.code = code;
        this.creation_date = creation_date;
        this.visibility = visibility;
        this.author = author;
        this.languages = languages;
        this.tags = tags;
        this.ratings = ratings;
        this.comments = comments;
    }
}