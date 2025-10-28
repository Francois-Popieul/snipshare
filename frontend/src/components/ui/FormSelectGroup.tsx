interface FormSelectGroupProps {
    label: string;
    name: string;
    options: { value: string; name: string }[];
}
function FormSelectGroup(props: FormSelectGroupProps) {
    return <div className="form_group">
        <label htmlFor={props.name} className="form_label">{props.label}</label>
        <select name={props.name} id={props.name} className="form_select">
            {props.options.map((option) => (
                <option value={option.value}>{option.name}</option>))}
        </select>
    </div>
}

export default FormSelectGroup;

