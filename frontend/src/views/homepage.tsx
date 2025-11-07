import { Link, useNavigate } from "react-router";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import "../main.css";
import Button from "../components/ui/Button";
import { MdCode, MdOutlineHandshake, MdOutlineGroup, MdOutlineFilterList } from "react-icons/md";
import { useIsMobile } from "../hooks/useMobile";
import HomepageVignette from "../components/ui/HomepageVignette";
import { useState } from "react";
import type { ToastMessage } from "../types/toastMessage";
import useAuth from "../hooks/useAuth";
import Toaster from "../components/ui/Toaster";

function Homepage() {
    const isMobile = useIsMobile();
    const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);
    const { userID } = useAuth();
    const navigate = useNavigate();

    function showToast(
        type: ToastMessage["type"],
        message: string,
        position: ToastMessage["position"],
        duration: number
    ) {
        setToastMessage({ type, message, position, duration });
    }

    function showAccountCreationPage() {
        if (userID) {
            showToast("error", "Déconnectez-vous avant de créer un nouveau compte.", "top_center", 3000);
            return;
        }
        else {
            navigate("/signup");
        }
    }

    return <>
        <Navbar />
        <main>
            <div className="home_section">
                <h2 className="home_title">Partagez des snippets avec vos collègues, développez de manière collaborative</h2>
                <p className="home_description">Une plateforme collaborative pour partager du code réutilisable entre développeurs. partager ses connaissances et accélérer le développement au sein du service public.</p>
                <div>
                    <Link to={"/snippets"}><Button type="button" name="Voir les snippets" width="medium" variant="outline" /></Link>
                    <Button type="button" name="Commencer" width="medium" variant="plain" onClick={showAccountCreationPage} /></div>
            </div>
            <div className="home_section">
                <h2 className="home_title">Pourquoi SnipShare ?</h2>
                <p className="home_description">Tout ce qu’il vous faut pour partager du code, collaborer et améliorer la qualité des outils numériques du service public.</p>
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
                <div><Button type="button" name="Créer un compte" width="medium" variant="plain" onClick={showAccountCreationPage} />
                    <Link to={"/snippets"}><Button type="button" name="Voir les snippets" width="medium" variant="outline_on_dark_background" /></Link></div>
            </div>

            {toastMessage && (
                <Toaster
                    type={toastMessage.type}
                    message={toastMessage.message}
                    position={toastMessage.position}
                    duration={toastMessage.duration}
                    onClose={() => setToastMessage(null)}
                />
            )}

        </main>
        <Footer />
    </>
}

export default Homepage;