export class Language {
    protected id_language: number | null;
    protected name: string;

    constructor(id: number | null, name: string) {
        this.id_language = id;
        this.name = name;
    }
}