import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import "../main.css"
import FormContainer from "../components/ui/FormContainer";
import FormInputGroup from "../components/ui/FormInputGroup";
import FormSelectGroup from "../components/ui/FormSelectGroup";

function SignupForm() {
    function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault();
    }

    return <>
        <Navbar />
        <main>
            <FormContainer
                title="Créer un compte"
                presentation="Rejoignez vos collègues pour partager du code"
                button_name="Valider"
                onSubmit={HandleSubmit}
                link={{
                    link_message: "Vous avez déjà un compte ?",
                    link_destination: "/login",
                    link_text: "Connectez-vous."
                }}>
                <FormInputGroup label="Nom complet :" name="fullname" type="text" />
                <FormSelectGroup
                    label="Genre :"
                    name="gender"
                    options={[
                        { value: "", name: "--Indiquez votre genre--" },
                        { value: "male", name: "Homme" },
                        { value: "female", name: "Femme" },
                        { value: "other", name: "Autre" },
                    ]}
                />
                <FormInputGroup label="Adresse e-mail :" name="email" type="email" />
                <FormInputGroup label="Mot de passe :" name="password" type="password" />
                <FormInputGroup label="Confirmer le mot de passe :" name="password_confirmation" type="password" />
            </FormContainer>
        </main>
        <Footer />
    </>
}

export default SignupForm;