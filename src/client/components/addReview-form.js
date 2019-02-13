import React from "react";
import CommentLogo from "./modal-comment";
import Stars from "./stars";
import Send from "./modal-send";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NewTitle: " ",
            NewReview: " ",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        // target = input
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        alert("sent");
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        id="enterTitle"
                        type="text"
                        name="NewTitle"
                        placeholder="Title"
                        value={this.state.NewTitle}
                        onChange={this.handleInputChange}
                    />{" "}
                    <br />
                    <span id="commentsection">
                        <CommentLogo />
                        <textarea
                            id="enterReview"
                            name="NewReview"
                            placeholder="Enter text here..."
                            value={this.state.NewReview}
                            onChange={this.handleInputChange}
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
