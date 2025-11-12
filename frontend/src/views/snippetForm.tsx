import type React from "react";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import FormContainer from "../components/ui/FormContainer";
import FormInputGroup from "../components/ui/FormInputGroup";
import FormSelectGroup from "../components/ui/FormSelectGroup";
import "../main.css"
import FormFieldset from "../components/ui/FormFieldset";
import FormTextAreaGroup from "../components/ui/FormTextAreaGroup";
import FormCodeInputGroup from "../components/ui/FormCodeInputGroup";
import { useEffect, useState } from "react";
import SnippetTag from "../components/ui/SnippetTag";
import Toaster from "../components/ui/Toaster";
import type { ToastMessage } from "../types/toastMessage";
import type { Tag } from "../types/types";
import { useApiFetch } from "../hooks/useApiFetch";
import type { Language } from "../types/types";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function SnippetForm() {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);
    const navigate = useNavigate();
    const { userID } = useAuth();

    const { fetchApi: languageFetchApi, result: languageResult, isLoading: languageIsLoading, isError: languageIsError, errorMsg: languageErrorMessage } = useApiFetch<Language[]>();

    useEffect(() => {
        languageFetchApi({
            method: "GET",
            path: "/snippets/languages",
        }).catch((error) => {
            console.error("Erreur lors du fetch :", error);
        });
    }, []);

    const { fetchApi: tagFetchApi, result: tagResult, isLoading: tagIsLoading, isError: tagIsError, errorMsg: tagErrorMessage } = useApiFetch<Tag[]>();

    const { fetchApi: postSnippetApi, result: postSnippetResult, isLoading: postSnippetIsLoading, isError: postSnippetIsError, errorMsg: postSnippetErrorMessage } = useApiFetch<any>();

    useEffect(() => {
        tagFetchApi({
            method: "GET",
            path: "/snippets/tags",
        }).catch((error) => {
            console.error("Erreur lors du fetch :", error);
        });
    }, []);

    if (languageIsLoading) return <p>Chargement…</p>;
    if (languageIsError) return <p>Erreur : {languageErrorMessage}</p>;

    function showToast(
        type: ToastMessage["type"],
        message: string,
        position: ToastMessage["position"],
        duration: number
    ) {
        setToastMessage({ type, message, position, duration });
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if (data.title === "" || data.description === "" || data.code === "" || data.language === "" || data.visibility === "") {
            showToast(
                "error",
                "Formulaire incomplet.",
                "top_center",
                3000
            );
            return;
        }
        try {
            const json = await postSnippetApi({
                method: "POST",
                path: "/snippets/creation",
                body: { data, selectedTags, userID },
                credentials: "include",
            });

            showToast("success", json.message || "Snippet ajouté.", "top_center", 3000);

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.error("Erreur lors du fetch :", error);
        }
    }

    function addTag(selectedTagValue: string, selectedTagName: string) {

        if (selectedTagName === "-- Sélectionnez une étiquette --") {
            return;
        }

        if (selectedTags.some(tag => tag.id_tag === selectedTagValue)) {
            showToast(
                "information",
                "Étiquette déjà ajoutée.",
                "top_center",
                3000
            );
            return;
        }

        if (selectedTags.length >= 5) {
            showToast(
                "error",
                "Vous ne pouvez pas ajouter plus de 5 étiquettes",
                "top_center",
                3000
            );
            return;
        }

        setSelectedTags((prev: Tag[]) => [...prev, { id_tag: selectedTagValue, name: selectedTagName }]);
        showToast(
            "success",
            "Étiquette ajoutée.",
            "top_center",
            3000
        );
    }

    function removeTag(value: string) {
        setSelectedTags((prev: Tag[]) => prev.filter(t => t.id_tag !== value));
        showToast(
            "success",
            "Étiquette supprimée.",
            "top_center",
            3000
        );
    }

    return <>
        <Navbar />
        <main>
            <FormContainer
                title="Ajouter un snippet"
                presentation="Partagez un extrait de code réutilisable qui pourrait servir à vos collègues"
                button_name="Ajouter le snippet"
                onSubmit={handleSubmit}>
                <FormFieldset legend={"Code"}>
                    <FormInputGroup label="Titre :" name="title" type="text" />
                    <FormTextAreaGroup label="Description :" name="description" max_length={500} rows={5}></FormTextAreaGroup>
                    <FormSelectGroup
                        label="Langage :"
                        name="language"
                        options={[
                            { value: "language-invite", name: "-- Sélectionnez le langage --" },
                            ...(languageResult?.data ?? []).map(language => ({
                                value: String(language.id_language),
                                name: language.name,
                            })),
                        ]}
                        onChange={() => null}
                    />
                    <FormSelectGroup
                        label="Visibilité :"
                        name="visibility"
                        options={[
                            { value: "visibility-invite", name: "-- Sélectionnez la visibilité --" },
                            { value: "public", name: "Public" },
                            { value: "private", name: "Privé" },
                            { value: "unlisted", name: "Non répertorié" }
                        ]}
                        onChange={() => null}
                    />
                    <FormCodeInputGroup label="Code :" name="code" max_length={5000} rows={20} />
                    <FormSelectGroup
                        label="Étiquette :"
                        name="tag"
                        options={[
                            { value: "", name: "-- Sélectionnez une étiquette --" },
                            ...(tagResult?.data ?? []).map(tag => ({
                                value: String(tag.id_tag),
                                name: tag.name,
                            })),
                        ]}
                        onChange={addTag}
                    />
                    <div id="tag_container" className="tag_container">
                        {selectedTags.map((tag) => (
                            <SnippetTag
                                key={tag.id_tag}
                                name={tag.name}
                                value={tag.id_tag}
                                onRemove={removeTag}
                            />
                        ))}
                    </div>
                </FormFieldset>
            </FormContainer>

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

export default SnippetForm;