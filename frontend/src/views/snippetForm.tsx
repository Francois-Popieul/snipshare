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
import { useState } from "react";
import SnippetTag from "./SnippetTag";

interface Tag {
    value: string;
    name: string;
}


function SnippetForm() {
    const [selectedLanguage, SetSelectedlanguage] = useState("");
    const [selectedTags, SetSelectedTags] = useState<Tag[]>([]);


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Données du formulaire :", data);
    }

    function setLanguage(selectedLanguageValue: string, selectedLanguageName: string) {
        console.log("Langage sélectionné :", selectedLanguageValue);
        console.log("Langage sélectionné :", selectedLanguageName);
        SetSelectedlanguage(selectedLanguageValue);
    }

    function addTag(selectedTagValue: string, selectedTagName: string) {
        console.log("Étiquette sélectionnée :", selectedTagValue);
        console.log("Étiquette sélectionnée :", selectedTagName);
        if (selectedTags.includes({ value: selectedTagValue, name: selectedTagName })) { return };
        if (selectedTags.length > 4) { return };

        SetSelectedTags(prev => [...prev, { value: selectedTagValue, name: selectedTagName }]);

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
                            { value: "", name: "-- Sélectionnez le langage --" },
                            { value: "javascript", name: "JavaScript" },
                            { value: "typescript", name: "TypeScript" },
                            { value: "python", name: "Python" },
                            { value: "java", name: "Java" },
                            { value: "csharp", name: "C#" },
                            { value: "cpp", name: "C++" },
                            { value: "go", name: "Go" },
                            { value: "ruby", name: "Ruby" },
                            { value: "php", name: "PHP" },
                            { value: "swift", name: "Swift" },
                            { value: "kotlin", name: "Kotlin" },
                            { value: "rust", name: "Rust" },
                            { value: "dart", name: "Dart" },
                            { value: "scala", name: "Scala" },
                            { value: "elixir", name: "Elixir" },
                            { value: "haskell", name: "Haskell" },
                            { value: "shell", name: "Shell / Bash" },
                            { value: "sql", name: "SQL" }
                        ]}
                        onChange={setLanguage}
                    />
                    <FormCodeInputGroup label="Code :" name="code" max_length={5000} rows={20} />
                    <FormSelectGroup
                        label="Étiquette :"
                        name="tag"
                        options={[
                            { value: "", name: "-- Sélectionnez une étiquette --" },
                            { value: "function", name: "Fonction" },
                            { value: "component", name: "Composant" },
                            { value: "hook", name: "Hook" },
                            { value: "utility", name: "Utilitaire" },
                            { value: "style", name: "Style / CSS" },
                            { value: "config", name: "Configuration" },
                            { value: "context", name: "Contexte" },
                            { value: "test", name: "Test" },
                            { value: "api", name: "Appel API" },
                            { value: "query", name: "Requête" },
                            { value: "schema", name: "Schéma / Validation" },
                            { value: "middleware", name: "Middleware" },
                            { value: "route", name: "Route" },
                            { value: "animation", name: "Animation" },
                            { value: "doc", name: "Documentation" }
                        ]}
                        onChange={addTag}
                    />
                    <div id="tag_container" className="tag_container">
                        {selectedTags.map((tag, index) => (
                            <SnippetTag key={index} name={tag.name} />
                        ))}

                    </div>
                </FormFieldset>
            </FormContainer>
        </main >
        <Footer />
    </>
}

export default SnippetForm;