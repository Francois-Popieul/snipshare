import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import FormInputGroup from "../components/ui/FormInputGroup";
import FormSelectGroup from "../components/ui/FormSelectGroup";
import Button from "../components/ui/Button";
import "../main.css";
import { useState } from "react";
import SnippetCard from "../components/ui/SnippetCard";
import { useIsMobile } from "../hooks/useMobile";
import FormTextAreaGroup from "../components/ui/FormTextAreaGroup";

interface ProfileProps {
    id: number;
    username: string;
    email: string;
    gender: string;
    bio: string;
    createdSnippets: [];
    likedSnippets: [];
}

function Profile(props: ProfileProps) {
    const isMobile = useIsMobile();
    const [userEditMode, setUserEditMode] = useState(false);
    const [snippetToggler, setSnippetToggler] = useState(false);

    function toggleUserEdit() {
        setUserEditMode(prev => !prev);
    }

    function toggleSnippetToggler() {
        setSnippetToggler(prev => !prev);
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

    return <>
        <Navbar />
        <main>
            <form action="" method="post" className={isMobile ? "profile_form mobile_profile_form" : "profile_form desktop_profile_form"} onSubmit={handleSubmit}>
                <div className="profile_main_container">
                    <div className="profile_top_container">
                        <div className="user_details">
                            {props.gender === "male" ? (
                                <FcBusinessman size={48} className="profile_user_icon" />
                            ) : (
                                <FcBusinesswoman size={48} className="profile_user_icon" />
                            )}
                            <div>
                                <p className="profile_author">{props.username}François</p>
                                <p className="profile_email">{props.email}francois.Popieul@hotmail.fr</p>
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
                    {props.bio ? <div className="biography">{props.bio}</div> : <div className="biography">Aucune information saisie à votre sujet. Cliquez sur <strong>Modifier</strong> pour ajouter votre biographie.</div>}
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
                    <Button type="button" name="Snippets créés" variant={snippetToggler === false ? "plain" : "outline"} width="extra_large" special="left_side" onClick={toggleSnippetToggler}></Button>
                    <Button type="button" name="Snippets likés" variant={snippetToggler === false ? "outline" : "plain"} width="extra_large" special="right_side" onClick={toggleSnippetToggler}></Button>
                </div>
                <div className="profile_snippet_list">
                    <SnippetCard
                        id={1}
                        language="C++"
                        creation_date="10/01/2024"
                        title="Snippet qui fait des trucs"
                        description="Snippet vraiment très utile"
                        tags={["SQL", "JavaScript", "TypeScript"]}
                        author="François Popieul"
                        authorGender="male"
                        isLiked
                        likeNumber="24"
                        commentNumber="10"
                    />
                    <SnippetCard
                        id={1}
                        language="C++"
                        creation_date="10/01/2024"
                        title="Snippet qui fait des trucs"
                        description="Snippet vraiment très utile"
                        tags={["SQL", "JavaScript", "TypeScript"]}
                        author="François Popieul"
                        authorGender="male"
                        isLiked
                        likeNumber="24"
                        commentNumber="10"
                    />
                    <SnippetCard
                        id={1}
                        language="C++"
                        creation_date="10/01/2024"
                        title="Snippet qui fait des trucs"
                        description="Snippet vraiment très utile"
                        tags={["SQL", "JavaScript", "TypeScript"]}
                        author="François Popieul"
                        authorGender="male"
                        isLiked
                        likeNumber="24"
                        commentNumber="10"
                    />
                    <SnippetCard
                        id={1}
                        language="C++"
                        creation_date="10/01/2024"
                        title="Snippet qui fait des trucs"
                        description="Snippet vraiment très utile"
                        tags={["SQL", "JavaScript", "TypeScript"]}
                        author="François Popieul"
                        authorGender="male"
                        isLiked
                        likeNumber="24"
                        commentNumber="10"
                    />
                    <SnippetCard
                        id={1}
                        language="C++"
                        creation_date="10/01/2024"
                        title="Snippet qui fait des trucs"
                        description="Snippet vraiment très utile"
                        tags={["SQL", "JavaScript", "TypeScript"]}
                        author="François Popieul"
                        authorGender="male"
                        isLiked
                        likeNumber="24"
                        commentNumber="10"
                    />
                </div>
            </div>
        </main>
        <Footer />
    </>
}

export default Profile;