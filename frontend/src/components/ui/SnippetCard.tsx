import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import "./SnippetCard.css";
import { Link } from "react-router";

interface SnippetCardProps {
    id: number;
    language: string;
    creation_date: string;
    title: string;
    description: string;
    tags: string[];
    author: string;
    authorGender: string;
    isLiked: boolean;
    likeNumber: string;
    commentNumber: string;
}

function SnippetCard(props: SnippetCardProps) {
    return <>
        <Link to={`/snippets/${props.id}`} className="simple_link">
            <div className="column_flex_container">
                <div className="row_flex_container">
                    <p className="language_box">{props.language}</p>
                    <p>{props.creation_date}</p>
                </div>
                <p className="snippet_title">{props.title}</p>
                <p className="snippet_description">{props.description}</p>
                <div className="tag_flex_container">
                    {props.tags.map((tag) => (
                        <p className="tag_box">{tag}</p>))}
                </div>
                <hr className="separator" />
                <div className="row_flex_container">
                    <div className="author_flex_container">
                        {props.authorGender === "male" ? (
                            <FcBusinessman size={36} className="author_icon" />
                        ) : (
                            <FcBusinesswoman size={36} className="author_icon" />
                        )}
                        <p className="author">{props.author}</p>
                    </div>

                    <div className="row_flex_container">
                        <div className="like_flex_container">
                            <IoMdHeartEmpty size={20} /> <p>{props.likeNumber}</p>
                        </div>
                        <div className="comment_flex_container">
                            <MdOutlineModeComment size={20} /> <p>{props.commentNumber}</p>
                        </div>
                    </div>
                </div>
            </div></Link>
    </>
}

export default SnippetCard;