import Button from "../ui/Button";
import BrandLogo from "../ui/BrandLogo";
import "./Navbar.css"
import BrandName from "../ui/BrandName";
import { Link } from "react-router";
import { useIsMobile } from "../../hooks/useMobile";
import BurgerMenu from "../ui/BurgerMenu";


function Navbar() {
    const isMobile = useIsMobile()

    return <>
        <div className="row_flex_container">
            <Link to={"/"} className="simple_link"><div className="row_flex_container">
                <BrandLogo width="medium" />
                <BrandName size="large" />
            </div></Link>
            {isMobile && (<><BurgerMenu /></>)}
            {!isMobile && (<><div className="row_flex_container">
                <Link to={"/snippets"}><Button name="Parcourir les snippets" width="large" variant="outline" /></Link>
                <Link to={"/"}><Button name="Snippets populaires" width="large" variant="outline" /></Link>
            </div>

                <div className="row_flex_container">
                    <Link to={"/login"}><Button name="Connexion" width="medium" variant="outline" /></Link>
                    <Link to={"/signup"}><Button name="Inscription" width="medium" variant="plain" /></Link>
                </div></>)}
        </div>
    </>
}

export default Navbar;