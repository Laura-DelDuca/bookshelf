import React from "react";
import Image from "../images/comment.png";

class CommentLogo extends React.Component {
    render() {
        return (
            <div id="divcommentlogo">
                <img id="commentlogo" src={Image} />
            </div>
        );
    }
}

export default CommentLogo;
