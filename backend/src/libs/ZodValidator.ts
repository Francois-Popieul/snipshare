import zod from "zod";

export const NewUser = zod.object({
    fullname: zod.string().max(100, "Nom trop long."),
    gender: zod.enum(["male", "female", "other"], "Genre sélectionné inconnu."),
    email: zod.email(),
    password: zod.string().min(8, "Mot de passe trop court.").max(16, "Mot de passe trop long.").refine((val) => /[A-Z]/.test(val) && /[a-z]/.test(val) && /[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val), { message: "Le mot de passe doit comprendre de 8 à 16 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial.", })
});

export const NewSnippet = zod.object({
    title: zod.string().max(200, "Titre trop long. Limite de 200 caractères."),
    description: zod.string().max(500, "Description trop long. Limite de 500 caractères."),
    code: zod.string().max(5000, "Description trop long. Limite de 5000 caractères."),
    visibility: zod.enum(["public", "private", "unlisted"], "Visibilité sélectionnée inconnue."),
});