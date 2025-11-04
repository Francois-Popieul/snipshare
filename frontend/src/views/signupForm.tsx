import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import "../main.css"
import FormContainer from "../components/ui/FormContainer";
import FormInputGroup from "../components/ui/FormInputGroup";
import FormSelectGroup from "../components/ui/FormSelectGroup";
import { useState } from "react";
import type { ToastMessage } from "../types/toastMessage";
import Toaster from "../components/ui/Toaster";

function SignupForm() {
    const [selectedGender, setSelectedGender] = useState("");
    const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);

    function showToast(
        type: ToastMessage["type"],
        message: string,
        position: ToastMessage["position"],
        duration: number
    ) {
        setToastMessage({ type, message, position, duration });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if (data.password != data.password_confirmation) {
            showToast(
                "error",
                "Les mots de passe ne concordent pas.",
                "top_center",
                3000
            );
            return;
        }
        console.log("Données du formulaire :", data);
    }

    function setGender(selectedGender: string) {
        console.log("Genre sélectionné :", selectedGender);
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