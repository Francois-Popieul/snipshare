import { FcBusinessman, FcBusinesswoman, FcDecision } from "react-icons/fc";
import "./UserGenderIcon.css"

interface UserGenderIconProps {
    gender: string;
    size: number;
}

function UserGenderIcon(props: UserGenderIconProps) {
    if (props.gender == "male") {
        return <FcBusinessman size={props.size} className="user_icon" />
    }
    else if (props.gender == "female") {
        return <FcBusinesswoman size={props.size} className="user_icon" />
    }
    else { return <FcDecision size={props.size} className="user_icon" /> }
}

export default UserGenderIcon;