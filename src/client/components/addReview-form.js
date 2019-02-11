import React from "react";
import CommentLogo from "./modal-comment";
import Stars from "./stars";
import Send from "./modal-send";

class ReviewForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        id="enterTitle"
                        type="text"
                        name="NewReview"
                        placeholder="Title"
                    />{" "}
                    <br />
                    <span id="commentsection">
                        <CommentLogo />
                        <textarea
                            id="enterReview"
                            name="myreview"
                            placeholder="Enter text here..."
                        />{" "}
                        <br />
                    </span>
                    <Stars />
                    <button className="sendbtn">
                        <Send />
                    </button>
                </form>
            </div>
        );
    }
}

export default ReviewForm;
