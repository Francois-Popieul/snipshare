import { AuthRepository } from "../repositories/AuthRepository";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { Controller } from "../libs/Controller";
import { TokenRepository } from "../repositories/TokenRepository";

export class AuthController extends Controller {
    async signup() {

        const body = this.request.body;
        if (!body.fullname || !body.gender || !body.email || !body.password || !body.password_confirmation) {
            return this.response.status(400).json({ message: "Requête incomplète ou invalide." })
        }

        const authRepository = new AuthRepository();
        const existingUser = await authRepository.findByEmail(body.email);

        if (existingUser) {
            return this.response.status(400).json({
                message: "Utilisateur déjà inscrit.",
            });
        }

        if (body.password !== body.password_confirmation) {
            return this.response.status(400).json({
                message: "Les mots de passe ne concordent pas.",
            });
        }

        const hashedPassword = await argon2.hash(body.password);
        const newUser = await authRepository.createUser(
            body.fullname,
            body.gender,
            body.email,
            hashedPassword,
            body.bio,
        );
        console.log("Nouvel utilisateur : " + JSON.stringify(newUser));

        if (!newUser) {
            return this.response.status(400).json({
                message: "Inscription impossible.",
            });
        }

        const jwtSecret = "286B9CC32BE1AA7C2FD5A6D958E62";
        const jwtTimeToLive = 43200;

        const jwtToken = jwt.sign({ sub: newUser.toString() }, jwtSecret, {
            algorithm: "HS256",
            expiresIn: jwtTimeToLive,
        });

        console.log(jwtToken);

        const tokenRepository = new TokenRepository();
        const newToken = tokenRepository.createToken(
            newUser.id_user,
            jwtToken,
            new Date(Date.now() + jwtTimeToLive * 1000).toISOString(),
            new Date().toISOString()
        );

        if (!newToken) {
            return this.response.status(400).json({
                message: "Inscription impossible.",
            });
        }

        this.response.cookie("authToken", jwtToken, {
            httpOnly: true,
            expires: new Date(Date.now() + jwtTimeToLive * 1000),
        });

        return this.response.status(200).json({
            message: "Inscription validée.",
        });
    };

    async login() {
        const body = this.request.body;
        if (!body.email || !body.password) {
            return this.response.status(400).json({ message: "Requête incomplète ou invalide." })
        }

        const authRepository = new AuthRepository();
        const existingUser = await authRepository.findByEmail(body.email);
        if (existingUser) {
            const validPassword: boolean = await argon2.verify(existingUser.password, body.password);
            if (validPassword) {
                return this.response.status(200).json({
                    message: "Connexion réussie.",
                })
            }
        }

        return this.response.status(400).json({
            message: "Identifiants non valides.",
        });
    }
}