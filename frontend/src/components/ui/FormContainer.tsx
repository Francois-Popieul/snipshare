import type React from "react";
import Button from "./Button";
import { Link } from "react-router";
import { useIsMobile } from "../../hooks/useMobile";

interface FormContainerProps {
    title: string;
    presentation: string;
    children: React.ReactNode;
    button_name: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    link?: {
        link_message: string;
        link_destination: string;
        link_text: string;
    }
}

function FormContainer(props: FormContainerProps) {
    const isMobile = useIsMobile();
    return <form
        onSubmit={props.onSubmit}
        action=""
        method="post"
        className={isMobile ? "form mobile_form" : "form desktop_form"}>
        <h1 className="form_title" > {props.title}</h1>
        <p className="form_presentation">{props.presentation}</p>
        {props.children}
        <div className="form_centered_container">
            <Button name={props.button_name} variant="plain" width="medium" />
            {props.link && <><p>{props.link.link_message}</p>
                <Link to={props.link.link_destination}>{props.link.link_text}</Link></>}
        </div>
    </form >
}

export default FormContainer;