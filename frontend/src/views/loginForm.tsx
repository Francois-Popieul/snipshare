import React, { useState } from "react";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import FormContainer from "../components/ui/FormContainer";
import FormInputGroup from "../components/ui/FormInputGroup";
import { useNavigate } from "react-router";
import type { ToastMessage } from "../types/toastMessage";
import { useApiFetch } from "../hooks/useApiFetch";
import type { User } from "../types/types";
import Toaster from "../components/ui/Toaster";
import useAuth from "../hooks/useAuth";

function LoginForm() {
    const navigate = useNavigate();
    const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);
    const { fetchApi } = useApiFetch<number>();
    const { userID, login } = useAuth();

    function showToast(
        type: ToastMessage["type"],
        message: string,
        position: ToastMessage["position"],
        duration: number
    ) {
        setToastMessage({ type, message, position, duration });
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Données du formulaire :", data);

        try {
            const json = await fetchApi({
                method: "POST",
                path: "/auth/login",
                body: data,
                credentials: "include",
            });

            showToast("success", json.message || "Connexion réussie.", "top_center", 3000);
            login(json.data);
            console.log("Utilisateur connecté : " + userID);

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            const msg = error instanceof Error ? error.message : String(error);
            showToast("error", msg || "Erreur lors de la connexion.", "top_center", 4000);
        }
    }

    return <>
        <Navbar />
        <main>
            <FormContainer
                title="Bienvenue"
                presentation="Connectez-vous pour continuer"
                button_name="Valider"
                onSubmit={handleSubmit}
                link={{
                    link_message: "Vous n’avez pas encore de compte ?",
                    link_destination: "/signup",
                    link_text: "Créez-en un."
                }}>
                <FormInputGroup label="Adresse e-mail :" name="email" type="email" placeholder="jean.dupont@ara.gouv.fr" />
                <FormInputGroup label="Mot de passe :" name="password" type="password" placeholder="**********" />
            </FormContainer>

            {toastMessage && (
                <Toaster
                    type={toastMessage.type}
                    message={toastMessage.message}
                    position={toastMessage.position}
                    duration={toastMessage.duration}
                    onClose={() => setToastMessage(null)}
                />
            )}

        </main>
        <Footer />
    </>
}

export default LoginForm;