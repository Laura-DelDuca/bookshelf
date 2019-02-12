import React from "react";
import ReactModal from "react-modal";
import ReviewForm from "./addReview-form";
import Close from "./modal-close";

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
                <button id="writeamodalbtn" onClick={this.handleOpenModal}>
                    {"Write a Review"}
                </button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="writeReview"
                    overlayClassName="overlayNewReview">
                    <ReviewForm />
                    <Close onClick={this.handleCloseModal} />
                </ReactModal>
            </div>
        );
    }
}

export default WriteReview;
