import React from "react";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import FormContainer from "../components/ui/FormContainer";
import FormInputGroup from "../components/ui/FormInputGroup";

function LoginForm() {
    function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault();
    }

    return <>
        <Navbar />
        <main>
            <FormContainer
                title="Bienvenue"
                presentation="Connectez-vous pour continuer"
                button_name="Valider"
                onSubmit={HandleSubmit}
                link={{
                    link_message: "Vous n’avez pas encore de compte ?",
                    link_destination: "/signup",
                    link_text: "Créez-en un."
                }}>
                <FormInputGroup label="Adresse e-mail :" name="email" type="email" />
                <FormInputGroup label="Mot de passe :" name="password" type="password" />
            </FormContainer>
        </main>
        <Footer />
    </>
}

export default LoginForm;