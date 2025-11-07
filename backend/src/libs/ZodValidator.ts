import zod from "zod";

export const PotentialUser = zod.object({
    fullname: zod.string().max(100, "Nom trop long."),
    gender: zod.enum(["male", "female", "other"], "Genre sélectionné inconnu."),
    email: zod.email(),
    password: zod.string().min(8, "Mot de passe trop court.").max(16, "Mot de passe trop long.").refine((val) => /[A-Z]/.test(val) && /[a-z]/.test(val) && /[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val), { message: "Le mot de passe doit comprendre de 8 à 16 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial.", })
});