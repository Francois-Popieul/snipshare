import { MdCode } from "react-icons/md";
import "./BrandLogo.css"
import clsx from "clsx";

interface BrandLogoProps {
    width: "small" | "medium" | "large";
}

function BrandLogo(props: BrandLogoProps) {
    return (
        <MdCode
            className={clsx("logo",
                `logo_${props.width}`
            )}
        />
    );
};

export default BrandLogo;