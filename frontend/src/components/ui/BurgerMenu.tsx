import "./BurgerMenu.css";
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import { Link } from "react-router";
import Button from "./Button";
import useAuth from "../../hooks/useAuth";
import { useIsMobile } from "../../hooks/useMobile";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { userID, logout } = useAuth();
    const isMobile = useIsMobile();

    return (
        <div className="burger_menu">
            <button
                className="burger_toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <MdMenu className="burger_icon" /> : <MdMenu className="burger_icon" />}
            </button>

            {isOpen && !userID && (
                <div className="burger_dropdown">
                    <Link to={"/login"}><Button name="Connexion" width="medium" variant="outline" /></Link>
                    <Link to={"/signup"}><Button name="Inscription" width="medium" variant="plain" /></Link>
                </div>
            )}

            {isOpen && userID && (
                <div className="burger_dropdown">
                    <Link to={"/profile"}><Button name="Profil" width="medium" variant="outline" /></Link>
                    {isMobile && (<Link to={"/snippets/creation"}><Button name="Créer un snippet" width="medium" variant="outline" /></Link>)}
                    <Link to={"/"}><Button name="Se déconnecter" width="medium" variant="plain" onClick={logout} /></Link>
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;