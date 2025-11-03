import Button from "./Button";

interface SnippetTagProps {
    name: string;
    value: string;
    onRemove?: (value: string) => void;
}

function SnippetTag(props: SnippetTagProps) {
    function removeTag() {
        event?.preventDefault();
        if (props.onRemove) { props.onRemove(props.value); }

    }
    return (
        <Button name={props.name} variant="outline" width="default" type="button" onClick={removeTag}>
            {props.onRemove && <span><sup> ×</sup></span>}
        </Button>
    );
}

export default SnippetTag;
