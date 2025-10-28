import { Link } from "react-router";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import Button from "../components/ui/Button";
import "../main.css"

function SignupForm() {
    return <>
        <Navbar />
        <main>
            <form action="" method="post" className="form">
                <h1 className="form_title">Créer un compte</h1>
                <p className="form_presentation">Rejoignez vos collègues pour partager du code</p>
                <div className="form_group">
                    <label htmlFor="full_name" className="form_label">Nom complet : </label>
                    <input type="text" name="full_name" id="full_name" className="form_input" required />
                </div>
                <div className="form_group">
                    <label htmlFor="gender" className="form_label">Sexe : </label>
                    <select name="gender" id="gender-select" className="form_select">
                        <option value="">--Indiquez votre sexe--</option>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                    </select>
                </div>
                <div className="form_group">
                    <label htmlFor="email" className="form_label">Adresse e-mail : </label>
                    <input type="email" name="email" id="email" className="form_input" required />
                </div>
                <div className="form_group">
                    <label htmlFor="password" className="form_label">Mot de passe : </label>
                    <input type="password" name="password" id="password" className="form_input" required />
                </div>
                <div className="form_group">
                    <label htmlFor="password_verification" className="form_label">Confirmer le mot de passe : </label>
                    <input type="password" name="password_verification" id="password_verification" className="form_input" required />
                </div>
                <div className="form_centered_container">
                    <Button name="Valider" variant="plain" width="medium" />
                    <p>Vous avez déjà un compte ?</p>
                    <Link to={"/login"}>Connectez-vous.</Link>
                </div>
            </form>
        </main>
        <Footer />
    </>
}

export default SignupForm;