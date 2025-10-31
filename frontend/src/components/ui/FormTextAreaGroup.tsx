import "./Form.css"

interface FormTextAreaGroupProps {
    label: string;
    name: string;
    max_length: number;
    rows: number;
    readonly?: boolean;
}

function FormTextAreaGroup(props: FormTextAreaGroupProps) {
    return <div className="form_group">
        <label htmlFor={props.name} className="form_label">{props.label}</label>
        <textarea name={props.name} id={props.name} className="form_textarea" maxLength={props.max_length} rows={props.rows} required />
    </div>
}

export default FormTextAreaGroup;