export type ApiResponse<TData> = {
    message: string;
    data: TData;
};

export type Gender = "male" | "female" | "other";

export type Visibility = "public" | "private" | "unlisted";

export type User = {
    id_user?: number;
    username: string;
    gender: Gender;
    mail_address: string;
    password: string;
    bio?: string;
}

export type Snippet = {
    id_snippet?: number;
    title: string;
    description: string;
    code: string;
    creation_date: Date;
    visibility: Visibility;
    user_id: number;
}

export type SnippetDetails = {
    id_snippet: number;
    title: string;
    description: string;
    code: string;
    creation_date: string;
    visibility: Visibility;
    author: {
        id: number,
        username: string,
        gender: string,
        mail: string,
        bio: string,
    };
    languages: string[];
    tags: string[];
    ratings: {
        user_id: number,
    }[];
    comments: {
        user_id: number,
        username: string,
        message: string,
        creation_date: string,
    }[];
}

export type Language = {
    id_language?: number;
    name: string;
};

export type Tag = {
    id_tag?: number;
    name: string;
};

export type Token = {
    id_token?: number;
    token_value: string;
    creation_date: Date;
    id_user: number;
};

export type Use = {
    snippet_id: number;
    language_id: number;
};

export type Categorize = {
    snippet_id: number;
    tag_id: number;
};

export type Rate = {
    snippet_id: number;
    user_id: number;
};

export type Comment = {
    snippet_id: number;
    user_id: number;
    message: string;
    creation_date: Date;
};