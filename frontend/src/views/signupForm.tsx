import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import "../main.css"
import FormContainer from "../components/ui/FormContainer";
import FormInputGroup from "../components/ui/FormInputGroup";
import FormSelectGroup from "../components/ui/FormSelectGroup";
import { useState } from "react";
import type { ToastMessage } from "../types/toastMessage";
import Toaster from "../components/ui/Toaster";
import { useApiFetch } from "../hooks/useApiFetch";
import { useNavigate } from "react-router";


function SignupForm() {
    const navigate = useNavigate();
    const [selectedGender, setSelectedGender] = useState("");
    const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);
    const { fetchApi } = useApiFetch<number>();

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
        const mailRegEx = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

        if (!mailRegEx.test(data.password.toString())) {
            showToast(
                "error",
                "Le mot de passe doit comprendre de 8 à 16 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial.",
                "top_center",
                5000
            );
            return;
        }

        if (data.password !== data.password_confirmation) {
            showToast(
                "error",
                "Les mots de passe ne concordent pas.",
                "top_center",
                3000
            );
            return;
        }

        try {
            const json = await fetchApi({
                method: "POST",
                path: "/auth/signup",
                body: data,
                credentials: "include",
            });

            showToast("success", json.message || "Inscription réussie.", "top_center", 3000);

            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            const msg = error instanceof Error ? error.message : String(error);
            showToast("error", msg || "Erreur lors de l'inscription.", "top_center", 4000);
        }
    }

    function setGender(selectedGender: string) {
        setSelectedGender(selectedGender);
    }

    return <>
        <Navbar />
        <main>
            <FormContainer
                title="Créer un compte"
                presentation="Rejoignez vos collègues pour partager du code"
                button_name="Valider"
                onSubmit={handleSubmit}
                link={{
                    link_message: "Vous avez déjà un compte ?",
                    link_destination: "/login",
                    link_text: "Connectez-vous."
                }}>
                <FormInputGroup label="Nom complet :" name="fullname" type="text" placeholder="Jean Dupont" />
                <FormSelectGroup
                    label="Genre :"
                    name="gender"
                    options={[
                        { value: "", name: "-- Indiquez votre genre --" },
                        { value: "male", name: "Homme" },
                        { value: "female", name: "Femme" },
                        { value: "other", name: "Autre" },
                    ]}
                    onChange={setGender}
                />
                <FormInputGroup label="Adresse e-mail :" name="email" type="email" placeholder="jean.dupont@ara.gouv.fr" />
                <FormInputGroup label="Mot de passe :" name="password" type="password" placeholder="***********" />
                <FormInputGroup label="Confirmer le mot de passe :" name="password_confirmation" type="password" placeholder="***********" />
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

export default SignupForm;