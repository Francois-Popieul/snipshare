import "./BrandName.css"
import clsx from "clsx";

interface BrandNameProps {
    size: "small" | "medium" | "large";
}

function BrandName(props: BrandNameProps) {
    return (
        <p
            className={clsx("brand",
                `brand_${props.size}`
            )}
        >SnipShare</p>
    );
};

export default BrandName;
