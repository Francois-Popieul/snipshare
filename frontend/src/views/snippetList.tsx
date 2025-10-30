import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import SnippetCard from "../components/ui/SnippetCard";

function SnippetList() {
    return <>
        <Navbar />
        <main>
            <h1>Page des snippets</h1>
            <SnippetCard
                id={1}
                language="C++"
                creation_date="10/01/2024"
                title="Snippet qui fait des trucs"
                description="Snippet vraiment très utile"
                tags={["SQL", "JavaScript", "TypeScript"]}
                author="François Popieum"
                authorGender="male"
                isLiked
                likeNumber="24"
                commentNumber="10"
            />
        </main>
        <Footer />
    </>
}

export default SnippetList;