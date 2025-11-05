import { useEffect } from "react";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import SnippetCard from "../components/ui/SnippetCard";
import { useApiFetch } from "../hooks/useApiFetch";
import type { SnippetDetails } from "../types/types";

function SnippetList() {

    const { fetchApi, result, isLoading, isError, errorMsg } = useApiFetch<SnippetDetails[]>();

    useEffect(() => {
        fetchApi({
            method: "GET",
            path: "/snippets",
        }).catch((error) => {
            console.error("Erreur lors du fetch :", error);
        });
    }, []);

    if (isLoading) return <p>Chargement…</p>;
    if (isError) return <p>Erreur : {errorMsg}</p>;

    return <>
        <Navbar />
        <main>
            <div className="snippets_container">
                {result && result.data.length > 0 ? (
                    result.data.map((snippet) => (
                        <SnippetCard
                            key={snippet.id_snippet}
                            id={snippet.id_snippet}
                            languages={snippet.languages}
                            creation_date={new Date(snippet.creation_date).toLocaleDateString('fr-FR')}
                            title={snippet.title}
                            description={snippet.description}
                            tags={snippet.tags} // À implémenter quand les tags seront disponibles
                            author={snippet.author.username} // Nom de l'utilisateur à récupérer autrement
                            authorGender={snippet.author.gender}
                            isLiked={false} // À implémenter avec la table rates
                            likeNumber={snippet.ratings.length} // À implémenter avec COUNT sur rates
                            commentNumber={snippet.comments.length} // À implémenter avec COUNT sur comments
                        />
                    ))
                ) : (
                    <p>Aucun snippet disponible.</p>
                )}
            </div>
        </main>
        <Footer />
    </>
}

export default SnippetList;