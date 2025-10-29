import type React from "react";

interface FormFieldsetProps {
    legend: string;
    children: React.ReactNode;
}

function FormFieldset(props: FormFieldsetProps) {
    return <fieldset className="form_fieldset">
        <legend className="form_legend">{props.legend}</legend>
        {props.children}
    </fieldset>
}

export default FormFieldset;