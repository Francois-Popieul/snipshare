import BrandLogo from "../ui/BrandLogo";
import "./Footer.css"
import BrandName from "../ui/BrandName";
import { Link } from "react-router";
import { useIsMobile } from "../../hooks/useMobile";


function Footer() {
    const isMobile = useIsMobile()

    return <>
        <div className="row_flex_container">
            <Link to={"/"} className="simple_link"><div className="row_flex_container">
                <BrandLogo width="small" />
                <BrandName size="medium" />
            </div></Link>
            <p className="copyright">© 2025 SnipShare. Marque déposée. Tous droits réservés.</p>
        </div>

    </>
}

export default Footer;