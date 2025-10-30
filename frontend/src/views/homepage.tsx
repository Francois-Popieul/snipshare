import { Link } from "react-router";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import "../main.css";
import Button from "../components/ui/Button";
import { MdCode, MdOutlineHandshake, MdOutlineGroup, MdOutlineFilterList } from "react-icons/md";
import { useIsMobile } from "../hooks/useMobile";
import HomepageVignette from "../components/ui/HomepageVignette";

function Homepage() {
    const isMobile = useIsMobile();
    return <>
        <Navbar />
        <main>
            <div className="home_section">
                <h2 className="home_title">Partagez des snippets avec vos collègues, développez de manière collaborative</h2>
                <p className="home_description">Une plateforme collaborative pour partager du code réutilisable entre développeurs. partager ses connaissances et accélérer le développement au sein du service public.</p>
                <div>
                    <Link to={"/snippets"}><Button name="Voir les snippets" width="medium" variant="outline" /></Link>
                    <Link to={"/signup"}><Button name="Commencer" width="medium" variant="plain" /></Link></div>
            </div>
            <div className="home_section">
                <h2 className="home_title">Pourquoi SnipShare ?</h2>
                <p className="home_description">Tout ce qu’il vous faut pour partager du code,  collaborer et éviter que les développeurs du service public français restent la risée du monde</p>
                <div className={isMobile ? "vignette_column_flex_container" : "vignette_row_flex_container"}>
                    <HomepageVignette
                        icon={<MdCode size={48} />}
                        title="Gestion de plusieurs langages"
                        description="Partagez des snippets en TypeScript, Rust, Python, Go, etc." />
                    <HomepageVignette
                        icon={<MdOutlineFilterList size={48} />}
                        title="Filtres intelligents"
                        description="Trouvez exactement ce dont vous avez besoin grâce aux filtres par langage, étiquette ou popularité." />
                    <HomepageVignette
                        icon={<MdOutlineGroup size={48} />}
                        title="Apprentissage collaboratif"
                        description="Commentez des snippets, likez le code utiles et apprenez de vos collègues." />
                </div>
            </div>
            <div className="CTA_banner">
                <MdOutlineHandshake size={64} />
                <h2>Prêt à partager votre code ?</h2>
                <p>Rejoignez vos collègues pour construire une base de codes réutilisables dès aujourd’hui.</p>
                <div><Link to={"/signup"}><Button name="Créer un compte" width="medium" variant="plain" /></Link>
                    <Link to={"/snippets"}><Button name="Voir les snippets" width="medium" variant="outline" /></Link></div>
            </div>
        </main>
        <Footer />
    </>
}

export default Homepage;