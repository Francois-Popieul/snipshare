import { Link } from "react-router";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import Button from "../components/ui/Button";
import "../main.css"

function SnippetForm() {
    return <>
        <Navbar />
        <main>
            <h1>Page de création d'un snippet</h1>
        </main>
        <Footer />
    </>
}

export default SnippetForm;