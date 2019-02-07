import React from "react";
import ReactModal from "react-modal";
import Send from "./modal-send";
import CommentLogo from "./modal-comment";
import Stars from "./stars";

class WriteReview extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Write a Review</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="writeReview"
                    overlayClassName="overlayNewReview">
                    <form>
                        <input id="enterTitle" type="text" name="NewReview" placeholder="Title" /> <br />
                        <span id="commentsection">
                            <CommentLogo />
                            <textarea id="enterReview" name="myreview" placeholder="Enter text here..."></textarea> <br />
                        </span>
                        <Stars />
                        <button className="sendbtn">
                            <Send />
                        </button>
                    </form>
                    <button id="closemodal" onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        );
    }
}

export default WriteReview;
