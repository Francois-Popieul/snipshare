import Button from "../ui/Button";
import BrandLogo from "../ui/BrandLogo";
import "./Navbar.css"
import BrandName from "../ui/BrandName";
import { Link } from "react-router";
import { useIsMobile } from "../../hooks/useMobile";
import BurgerMenu from "../ui/BurgerMenu";
import useAuth from "../../hooks/useAuth";


function Navbar() {
    const isMobile = useIsMobile();
    const { userID, logout } = useAuth();

    return <>
        <div className="row_flex_container">
            <Link to={"/"} className="simple_link"><div className="row_flex_container">
                <BrandLogo width="medium" />
                <BrandName size="large" />
            </div></Link>
            {isMobile && (<><BurgerMenu /></>)}
            {!isMobile && (<><div className="row_flex_container">
                <Link to={"/snippets"}><Button name="Parcourir les snippets" width="large" variant="outline" /></Link>
                <Link to={"/snippets"}><Button name="Snippets populaires" width="large" variant="outline" /></Link>
            </div>

                {userID && (<div className="row_flex_container">
                    <Link to={"/snippets/creation"}><Button name="Créer un snippet" width="medium" variant="outline" /></Link>
                    {/* <Link to={"/profile"}><Button name="Profil" width="medium" variant="plain" /></Link> */}
                    <><BurgerMenu /></>
                </div>)}
                {!userID && (<div className="row_flex_container">
                    <Link to={"/login"}><Button name="Connexion" width="medium" variant="outline" /></Link>
                    <Link to={"/signup"}><Button name="Inscription" width="medium" variant="plain" /></Link>
                </div>)}</>)}
        </div>
    </>
}

export default Navbar;