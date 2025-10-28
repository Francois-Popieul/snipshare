import { Link } from "react-router";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import Button from "../components/ui/Button";

function LoginForm() {
    return <>
        <Navbar />
        <main>
            <form action="" method="post" className="form">
                <h1 className="form_title">Bienvenue</h1>
                <p className="form_presentation">Connectez-vous à votre compte pour continuer</p>
                <div className="form_group">
                    <label htmlFor="email" className="form_label">Adresse e-mail : </label>
                    <input type="email" name="email" id="email" className="form_input" required />
                </div>
                <div className="form_group">
                    <label htmlFor="password" className="form_label">Mot de passe : </label>
                    <input type="password" name="password" id="password" className="form_input" required />
                </div>

                <div className="form_centered_container">
                    <Button name="Valider" variant="plain" width="medium" />
                    <p>Vous n’avez pas encore de compte ?</p>
                    <Link to={"/signup"}>Créez-en un.</Link>
                </div>
            </form>
        </main>
        <Footer />
    </>
}

export default LoginForm;