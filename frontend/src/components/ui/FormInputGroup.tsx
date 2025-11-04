import "./Form.css"

type InputType = "text" | "email" | "password";

interface FormInputGroupProps {
    label: string;
    name: string;
    type: InputType;
    placeholder?: string;
    readonly?: boolean;
}

function FormInputGroup(props: FormInputGroupProps) {
    return <div className="form_group">
        <label htmlFor={props.name} className="form_label">{props.label}</label>
        <input type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} className="form_input" required />
    </div>
}

export default FormInputGroup;