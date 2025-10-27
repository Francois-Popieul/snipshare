import "./BurgerMenu.css";
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import { Link } from "react-router";
import Button from "./Button";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="burger_menu">
            <button
                className="burger_toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <MdMenu className="burger_icon" /> : <MdMenu className="burger_icon" />}
            </button>

            {isOpen && (
                <div className="burger_dropdown">
                    <Link to={"/login"}><Button name="Connexion" width="medium" variant="outline" /></Link>
                    <Link to={"/signup"}><Button name="Inscription" width="medium" variant="plain" /></Link>
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;