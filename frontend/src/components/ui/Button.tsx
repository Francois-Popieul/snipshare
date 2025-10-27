import "./Button.css";
import clsx from "clsx";

interface ButtonProps {
  name: string;
  variant: "plain" | "outline";
  width: "default" | "very_small" | "small" | "medium" | "large";
  onClick?: () => void;
}

function Button (props: ButtonProps) {
  return (
    <button
      className={clsx(
        "button",
        `button_${props.variant}`,
        `button_${props.width}`
      )}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
