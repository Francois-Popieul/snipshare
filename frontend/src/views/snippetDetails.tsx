import { Link, useParams } from "react-router";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import { MdOutlineArrowBack } from "react-icons/md";
import "../main.css"
import Button from "../components/ui/Button";
import SnippetTag from "../components/ui/SnippetTag";
import type { ToastMessage } from "../types/toastMessage";
import { useEffect, useState } from "react";
import Toaster from "../components/ui/Toaster";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import { useApiFetch } from "../hooks/useApiFetch";
import type { SnippetDetails } from "../types/types";

function SnippetDetailView() {
    const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);

    function showToast(
        type: ToastMessage["type"],
        message: string,
        position: ToastMessage["position"],
        duration: number
    ) {
        setToastMessage({ type, message, position, duration });
    }

    const { id } = useParams();

    const { fetchApi, result, isLoading, isError, errorMsg } = useApiFetch<SnippetDetails>();

    useEffect(() => {
        if (!id) return;
        fetchApi({
            method: "GET",
            path: `/snippets/${id}`,
        }).catch((error) => {
            console.error("Erreur lors du fetch :", error);
        });
    }, [id]);

    if (isLoading) return <p>Chargement…</p>;
    if (isError) return <p>Erreur : {errorMsg}</p>;

    if (!result || !result.data) {
        return <>
            <Navbar />
            <main>
                <p>Snippet introuvable.</p>
            </main>
            <Footer />
        </>;
    }

    function Copy() {
        const snippet_code_element = document.getElementById("snippet_code");
        if (snippet_code_element) {
            const snippet_code = snippet_code_element.innerText;
            if (snippet_code) {
                try {
                    navigator.clipboard.writeText(snippet_code);
                    showToast(
                        "success",
                        "Code copié dans le presse-papier.",
                        "top_center",
                        3000
                    );
                } catch (error) {
                    showToast(
                        "error",
                        "Impossible de copier le code dans le presse-papier.",
                        "top_center",
                        3000
                    );
                }
            }
        }
    }

    return <>
        <Navbar />
        <main>
            <Link to="/snippets" className="simple_link"><p className="go_back"><MdOutlineArrowBack size={24} /> Revenir aux snippets</p></Link>
            <p className="snippet_detail_language">{result.data.language}</p>
            <h1 className="snippet_detail_title">{result.data.title}</h1>
            <p className="snippet_detail_description">{result.data.description}</p>
            <div className="snippet_detail_tag_container">
                <SnippetTag name={result.data.language} value={result.data.language} />
            </div>
            <hr className="separator" />
            <div className="snippet_detail_author_container">
                <div className="snippet_detail_author_icon">
                    <div className="">
                        <div className="">
                            <FcBusinesswoman size={48} className="" />
                            <div>
                                <p className="">{result.data.username}</p>
                                <p className="">{result.data.mail_address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="separator" />
            <div className="snippet_detail_code_container">
                <div className="snippet_detail_code_top_container">
                    <p className="snippet_detail_code_title">Code</p>
                    <Button name="Copier" variant="outline" type="button" width="medium" onClick={Copy} />
                </div>
                <pre className="snippet_detail_code_text"><code id="snippet_code">{result.data.code}</code></pre>
            </div>
            <h2 className="snippet_detail_comment_title">Commentaires</h2>
            <div className="snippet_detail_comment_container">{result.data.comment}</div>
            {toastMessage && (
                <Toaster
                    type={toastMessage.type}
                    message={toastMessage.message}
                    position={toastMessage.position}
                    duration={toastMessage.duration}
                    onClose={() => setToastMessage(null)}
                />
            )}
        </main >
        <Footer />
    </>
}

export default SnippetDetailView;