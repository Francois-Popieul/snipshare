import { Link } from "react-router";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import { MdOutlineArrowBack } from "react-icons/md";
import "../main.css"

function SnippetDetails() {
    return <>
        <Navbar />
        <main>
            <Link to="/snippets" className="simple_link"><p><MdOutlineArrowBack /> Revenir aux snippets</p></Link>
            <h1>Page de détails d'un snippet</h1>
        </main>
        <Footer />
    </>
}

export default SnippetDetails;