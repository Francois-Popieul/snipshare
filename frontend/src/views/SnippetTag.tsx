import Button from "../components/ui/Button";

interface SnippetTagProps {
    name: string;
    value: string;
    onRemove: (value: string) => void;
}

function SnippetTag(props: SnippetTagProps) {
    function removeTag() {
        event?.preventDefault();
        props.onRemove(props.value);
    }
    return (
        <Button name={props.name} variant="outline" width="default" type="button" onClick={removeTag}>
            <span><sup> ×</sup></span>
        </Button>
    );
}

export default SnippetTag;
