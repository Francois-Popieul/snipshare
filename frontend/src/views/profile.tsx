import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import FormInputGroup from "../components/ui/FormInputGroup";
import FormSelectGroup from "../components/ui/FormSelectGroup";
import Button from "../components/ui/Button";
import "../main.css";
import { useEffect, useState } from "react";
import SnippetCard from "../components/ui/SnippetCard";
import { useIsMobile } from "../hooks/useMobile";
import FormTextAreaGroup from "../components/ui/FormTextAreaGroup";
import UserGenderIcon from "../components/ui/UserGenderIcon";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useApiFetch } from "../hooks/useApiFetch";
import type { SnippetDetails, User } from "../types/types";

function Profile() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();
    const [userEditMode, setUserEditMode] = useState(false);
    const [snippetToggler, setSnippetToggler] = useState(false);
    const { userID } = useAuth();
    const [snippets, setSnippets] = useState<SnippetDetails[] | undefined>([])

    function toggleUserEdit() {
        setUserEditMode(prev => !prev);
    }

    function toggleSnippetToggler() {
        setSnippetToggler(prev => !prev);
    }

    function showCreatedSnippets() {
        if (snippetToggler !== false) {
            setSnippets(userCreatedSnippetResult?.data);
            setSnippetToggler(false);
        }
    }

    function showLikedSnippets() {
        if (snippetToggler !== true) {
            setSnippets(userLikedSnippetResult?.data);
            setSnippetToggler(true);
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Données du formulaire :", data);
    }

    function setGender(selectedGenderValue: string, selectedGenderName: string) {
        console.log("Genre sélectionné :", selectedGenderValue);
        console.log("Genre sélectionné :", selectedGenderName);
    }

    const { fetchApi: userFetchApi, result: userResult, isLoading: userIsLoading, isError: userIsError, errorMsg: userErrorMessage } = useApiFetch<User>();

    const { fetchApi: userCreatedSnippetFetchApi, result: userCreatedSnippetResult, isLoading: userCreatedSnippetIsLoading, isError: userCreatedSnippetIsError, errorMsg: userCreatedSnippetErrorMessage } = useApiFetch<SnippetDetails[]>();

    const { fetchApi: userLikedSnippetFetchApi, result: userLikedSnippetResult, isLoading: userLikedSnippetIsLoading, isError: userLikedSnippetIsError, errorMsg: userLikedSnippetErrorMessage } = useApiFetch<SnippetDetails[]>();

    useEffect(() => {
        // Rediriger si pas d'utilisateur connecté
        if (userID === null) {
            navigate("/login");
            return;
        }

        userFetchApi({
            method: "GET",
            path: `/user/${userID}`,
        }).catch((error) => {
            console.error("Erreur lors du fetch :", error);
        });

        userCreatedSnippetFetchApi({
            method: "GET",
            path: `/user/created-snippets/${userID}`,
        }).catch((error) => {
            console.error("Erreur lors du fetch :", error);
        });

        userLikedSnippetFetchApi({
            method: "GET",
            path: `/user/liked-snippets/${userID}`,
        }).catch((error) => {
            console.error("Erreur lors du fetch :", error);
        });
    }, []);

    useEffect(() => {
        setSnippets(userCreatedSnippetResult?.data);
        setSnippetToggler(true);
    }, [userCreatedSnippetResult]);

    useEffect(() => {
        setSnippets(userLikedSnippetResult?.data);
        setSnippetToggler(false);
    }, [userLikedSnippetResult]);

    if (userID === null) {
        return <p>Redirection…</p>;
    }
    if (userIsLoading) return <p>Chargement…</p>;
    if (userIsError) return <p>Erreur : {userErrorMessage}</p>;

    return <>
        <Navbar />
        <main>
            <form action="" method="post" className={isMobile ? "profile_form mobile_profile_form" : "profile_form desktop_profile_form"} onSubmit={handleSubmit}>
                <div className="profile_main_container">
                    <div className="profile_top_container">
                        <div className="user_details">
                            <UserGenderIcon gender={userResult ? userResult.data.gender : "other"} size={48} />
                            <div>
                                <p className="profile_author">{userResult?.data.username}</p>
                                <p className="profile_email">{userResult?.data.mail_address}</p>
                            </div>
                        </div>
                        {userEditMode === false && (
                            <Button
                                type="button"
                                name="Modifier"
                                variant="plain"
                                width="medium"
                                onClick={toggleUserEdit}
                            />
                        )}
                    </div>
                    {userResult?.data.bio != null ? <div className="biography">{userResult.data.bio}</div> : <div className="biography">Aucune information saisie à votre sujet. Cliquez sur <strong>Modifier</strong> pour ajouter votre biographie.</div>}
                </div>

                {userEditMode === true && (
                    <>
                        <FormInputGroup label="Nom complet :" name="fullname" type="text" />
                        <FormSelectGroup
                            label="Genre :"
                            name="gender"
                            options={[
                                { value: "", name: "-- Indiquez votre genre --" },
                                { value: "male", name: "Homme" },
                                { value: "female", name: "Femme" },
                                { value: "other", name: "Autre" },
                            ]}
                            onChange={setGender}
                        />
                        <FormTextAreaGroup label="Biographie :" name="bio" max_length={2000} rows={5}></FormTextAreaGroup>
                        <FormInputGroup label="Mot de passe actuel :" name="current_password" type="password" />
                        <FormInputGroup label="Nouveau mot de passe :" name="new_paswword" type="password" />
                        <FormInputGroup label="Confirmer le nouveau mot de passe :" name="new_paswword_confirmation" type="password" />
                        <div className="profile_update_buttons">
                            <Button type="submit" name="Mettre à jour" variant="plain" width="medium" />
                            <Button type="button" name="Annuler" variant="outline" width="medium" onClick={toggleUserEdit} />
                        </div>

                    </>
                )}
            </form>
            <div className="profile_snippet_container">
                <div className={isMobile ? "snippet_button_container mobile_snippet_button_container" : "snippet_button_container desktop_snippet_button_container"}>
                    <Button type="button" name="Snippets créés" variant={snippetToggler === false ? "plain" : "outline"} width="extra_large" special="left_side" onClick={showCreatedSnippets}></Button>
                    <Button type="button" name="Snippets likés" variant={snippetToggler === false ? "outline" : "plain"} width="extra_large" special="right_side" onClick={showLikedSnippets}></Button>
                </div>
                <div className="profile_snippet_list">
                    {snippets && snippets.length > 0 ? (
                        snippets.map((snippet) => (
                            <SnippetCard
                                key={snippet.id_snippet}
                                id={snippet.id_snippet}
                                languages={snippet.languages}
                                creation_date={new Date(snippet.creation_date).toLocaleDateString('fr-FR')}
                                title={snippet.title}
                                description={snippet.description}
                                tags={snippet.tags}
                                author={snippet.author.username}
                                authorGender={snippet.author.gender}
                                isLiked={false} // À implémenter avec la table rates
                                likeNumber={snippet.ratings.length}
                                commentNumber={snippet.comments.length}
                            />
                        ))
                    ) : (
                        <p>Aucun snippet disponible.</p>
                    )}
                </div>
            </div>
        </main>
        <Footer />
    </>
}

export default Profile;