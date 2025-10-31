import Button from "../components/ui/Button";

interface SnippetTagProps {
    name: string,
}

function SnippetTag(props: SnippetTagProps) {
    function removeTag() {

    }
    return <>
        <Button name={props.name} variant="outline" width="default" type="button" onClick={removeTag} />
    </>
}

export default SnippetTag;