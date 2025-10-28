import type { ReactElement } from "react";
import "./HomepageVignette.css";

interface HomepageVignetteProps {
    icon: ReactElement;
    title: string;
    description: string;
}

function HomepageVignette(props: HomepageVignetteProps) {

    return <div className="homepage_vignette">
        <div className="vignette_icon">{props.icon}</div>
        <h3 className="vignette_title">{props.title}</h3>
        <p className="vignette_description">{props.description}</p>
    </div>
}

export default HomepageVignette;